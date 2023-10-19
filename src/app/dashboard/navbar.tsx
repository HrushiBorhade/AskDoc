import React, { Suspense } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { buttonVariants } from "@/components/ui/button";

type Props = {};

export default async function DashBoardNavbar(props: Props) {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  return (
    <div className="sticky container font-sans h-18 inset-x-0 top-0  z-30 w-full pt-2  backdrop-blur-lg border-b border-gray-900 transition-all">
      <MaxWidthWrapper className="">
        <div className="flex h-14 md:px-10 items-center justify-between ">
          <Link
            href="/"
            className="flex z-40 font-heading font-bold text-xl md:text-2xl"
          >
            <span>AskDoc.</span>
          </Link>
          <Link
            href="/dashboard"
            className={buttonVariants({
              variant: "outline",
            })}
          >
            DashBoard
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
