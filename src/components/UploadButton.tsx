"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

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
            "rounded-full py-6 md:py-6 md:px-6 font-semibold"
          )}
        >
          UPLOAD PDF
        </Button>
      </DialogTrigger>

      <DialogContent>
        {/* <UploadDropzone isSubscribed={isSubscribed} /> */}
        Some Upload Component
      </DialogContent>
    </Dialog>
  );
};

export default UploadButton;
