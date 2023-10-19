import React, { Suspense } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { NavigationMenu } from "./ui/navigation-menu";
import NavMenu from "./NavMenu";
import { buttonVariants } from "./ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import { ArrowRight, UserCircle2 } from "lucide-react";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { cn } from "@/lib/utils";

type Props = {};

export default async function Navbar(props: Props) {
  return (
    <div className="container  mt-4 w-full">
      <MaxWidthWrapper className="">
        <div className="flex h-14 px-2 items-center justify-between ">
          <Link href="/" className="flex z-40 font-heading font-bold text-3xl">
            <span>AskDoc.</span>
          </Link>
          <div className="hidden md:block py-6 mt-2 mr-5 ">
            <NavMenu isAuth={true} />
          </div>
          <div className="">
            <LoginLink
              className={cn(
                buttonVariants({
                  variant: "default",
                  size: "lg",
                }),
                "font-semibold text-sm"
              )}
            >
              LOGIN
            </LoginLink>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
