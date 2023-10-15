import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { NavigationMenu } from "./ui/navigation-menu";
import NavMenu from "./NavMenu";
import { buttonVariants } from "./ui/button";
import { UserButton, auth } from "@clerk/nextjs";

type Props = {};

export default async function Navbar(props: Props) {
  const { userId } = await auth();
  const isAuth = !!userId;
  return (
    <div className="sticky h-20 inset-x-0 top-0 z-30 w-full  backdrop-blur-lg transition-all">
      <MaxWidthWrapper className="py-2">
        <div className="flex h-14 container items-center justify-between ">
          <Link href="/" className="flex z-40 font-heading font-bold text-3xl">
            <span>AskDoc.</span>
          </Link>
          <div className="hidden md:block py-4">
            <NavMenu />
          </div>
          <div>
            {isAuth ? (
              <div className="absolute rounded-full  ">
                <UserButton afterSignOutUrl="/" />
              </div>
            ) : (
              <Link href="/sign-in">
                <button
                  className={buttonVariants({
                    className: "font-semibold text-base rounded-full py-6",
                    size: "lg",
                  })}
                >
                  LOGIN
                </button>
              </Link>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
