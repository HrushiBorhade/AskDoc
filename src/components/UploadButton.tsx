"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Cloud, Upload, File, Loader2, Inbox } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import Dropzone from "react-dropzone";
import { Progress } from "./ui/progress";
import { trpc } from "@/app/_trpc/client";
import { toast, useToast } from "./ui/use-toast";
import { db } from "@/db";
import { useUploadThing } from "@/lib/uploadthing";

const UploadDropzone = ({ isSubscribed }: { isSubscribed: boolean }) => {
  const router = useRouter();

  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const { toast } = useToast();

  const { startUpload } = useUploadThing(
    isSubscribed ? "proPlanUploader" : "freePlanUploader"
  );

  const { mutate: startPolling } = trpc.getFile.useMutation({
    onSuccess: (file) => {
      router.push(`/dashboard/${file.id}`);
    },
    retry: true,
    retryDelay: 500,
  });

  const startSimulatedProgress = () => {
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 95) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 5;
      });
    }, 500);

    return interval;
  };
  return (
    <Dropzone
      multiple={false}
      onDrop={async (acceptedFile) => {
        setIsUploading(true);

        const progressInterval = startSimulatedProgress();

        // handle file uploading
        const res = await startUpload(acceptedFile);

        if (!res) {
          return toast({
            title: "Something went wrong",
            description: "Please try again later",
            variant: "destructive",
          });
        }

        const [fileResponse] = res;

        const key = fileResponse?.key;

        if (!key) {
          return toast({
            title: "Something went wrong",
            description: "Please try again later",
            variant: "destructive",
          });
        }

        clearInterval(progressInterval);
        setUploadProgress(100);

        startPolling({ key });
      }}
    >
      {({ getRootProps, getInputProps, acceptedFiles, open }) => (
        <div
          {...getRootProps()}
          onClick={open}
          className="upload-styles rounded-2xl cursor-pointer m-2  py-12 flex justify-center items-center flex-col"
        >
          <div className="flex items-center justify-center h-full w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-6 h-6 mb-3  text-slate-300 block" />
                <p className="mb-2 text-gradient font-poppins text-base text-slate-300">
                  Drop your PDF Document Here
                </p>
                <p className="text-xs text-zinc-500">
                  PDF (up to {isSubscribed ? "16" : "4"}MB)
                </p>
              </div>

              {acceptedFiles && acceptedFiles[0] ? (
                <div className="max-w-xs bg-zinc-900 py-1 flex items-center rounded-xl overflow-hidden outline outline-[1px] outline-zinc-900 divide-x divide-zinc-900">
                  <div className="px-3 py-2 h-full grid place-items-center">
                    <File className="h-4 w-4 text-slate-300" />
                  </div>
                  <div className="px-3 py-2 h-full text-sm truncate">
                    {acceptedFiles[0].name}
                  </div>
                </div>
              ) : null}

              {isUploading ? (
                <div className="w-[90%] mt-4 max-w-xs mx-auto">
                  <Progress
                    indicatorColor={
                      uploadProgress === 100 ? "bg-green-500" : ""
                    }
                    value={uploadProgress}
                    className="h-1 w-full bg-zinc-500"
                  />
                  {uploadProgress === 100 ? (
                    <div className="flex gap-1 items-center justify-center text-sm text-zinc-300 text-center pt-2">
                      <Loader2 className="h-3 w-3 animate-spin" />
                      Redirecting...
                    </div>
                  ) : null}
                </div>
              ) : null}
              <input
                {...getInputProps()}
                type="file"
                id="dropzone-file"
                className="hidden"
              />
            </label>
          </div>
        </div>
      )}
    </Dropzone>
  );
};
const UploadButton = ({ isSubscribed }: { isSubscribed: boolean }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button
          className={cn(
            buttonVariants({
              variant: "default",
              size: "md",
            }),
            "rounded-full px-4 py-5 md:py-6 font-semibold text-xs"
          )}
        >
          <Upload className="h-4 w-4 mr-2 " />
          UPLOAD PDF
        </Button>
      </DialogTrigger>

      <DialogContent>
        <UploadDropzone isSubscribed={isSubscribed} />
        {/* Some Upload Component */}
      </DialogContent>
    </Dialog>
  );
};

export default UploadButton;
