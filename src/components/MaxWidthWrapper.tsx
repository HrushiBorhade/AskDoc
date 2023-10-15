import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const MaxWidthWrapper = ({ className, children }: Props) => {
  return (
    <div
      className={cn(
        className,
        "mx-auto w-full max-w-screen-[1200px] px-5 md:px-20'"
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
