import React, { Suspense } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { auth } from "@clerk/nextjs";

type Props = {};

export default async function DashBoardNavbar(props: Props) {
  const { userId } = await auth();
  const isAuth = !!userId;
  return (
    <div className="sticky font-sans h-16 inset-x-0 top-0  z-30 w-full  backdrop-blur-lg border-b border-gray-900 transition-all">
      <MaxWidthWrapper className="">
        <div className="flex h-14 md:px-10 items-center justify-between ">
          <Link
            href="/"
            className="flex z-40 font-heading font-bold text-xl md:text-2xl"
          >
            <span>AskDoc.</span>
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
