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
import { uploadToS3 } from "@/lib/s3";
import { toast } from "./ui/use-toast";
import { db } from "@/lib/db";

const UploadDropzone = () => {
  const router = useRouter();
  const { mutate: createFile } = trpc.getFile.useMutation({
    onSuccess: (file) => {
      console.log(file);
      redirect(`/dashboard/${file?.id}`);
    },
  });

  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const startSimulatedProgress = () => {
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return prev;
        }

        return prev + 5;
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
        // const res = await startUpload(acceptedFile);

        // if (!res) {
        //   return toast({
        //     title: "Something went wrong",
        //     description: "Please try again later",
        //     variant: "destructive",
        //   });
        // }

        // const [fileResponse] = res;

        // const key = fileResponse?.key;

        // if (!key) {
        //   return toast({
        //     title: "Something went wrong",
        //     description: "Please try again later",
        //     variant: "destructive",
        //   });
        // }

        const file = await uploadToS3(acceptedFile[0]);
        console.log(file);

        if (!file) {
          return toast({
            title: "Something went wrong",
            description: "Please try again later",
            variant: "destructive",
          });
        }

        clearInterval(progressInterval);
        setUploadProgress(100);
      }}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <div
          {...getRootProps()}
          className="border-dashed  border border-zinc-800 rounded-2xl cursor-pointer bg-[#0e0e0e] py-12 flex justify-center items-center flex-col"
        >
          <div className="flex items-center justify-center h-full w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Inbox className="w-8 h-8 mb-4  text-blue-500 block" />
                <p className="mb-2 text-sm text-slate-300">
                  <span className="font-semibold">Click to Upload</span> or Drag
                  n Drop
                </p>
                <p className="text-xs text-zinc-500">
                  {/* PDF (up to {isSubscribed ? "16" : "4"}MB) */}
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
                <div className="w-full mt-4 max-w-xs mx-auto">
                  <Progress
                    value={uploadProgress}
                    className="h-1 w-full bg-zinc-900"
                  />
                  {uploadProgress === 100 ? (
                    <div className="flex gap-1 mt-2 items-center justify-center text-sm text-slate-300 text-center pt-2">
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
const UploadButton = ({}: {}) => {
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
            }),
            "rounded-full px-4 py-[22px] md:py-6 md:px-6 font-semibold"
          )}
        >
          <Upload className="h-4 w-4 mr-2 font-bold" />
          UPLOAD PDF
        </Button>
      </DialogTrigger>

      <DialogContent>
        <UploadDropzone />
        {/* Some Upload Component */}
      </DialogContent>
    </Dialog>
  );
};

export default UploadButton;
