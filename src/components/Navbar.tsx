import React, { Suspense } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { NavigationMenu } from "./ui/navigation-menu";
import NavMenu from "./NavMenu";
import { buttonVariants } from "./ui/button";

import { ArrowRight, UserCircle2 } from "lucide-react";
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { cn } from "@/lib/utils";
import UserAccountNav from "./UserAccountNav";

type Props = {};

export default async function Navbar(props: Props) {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  return (
    <div className="flex container sticky h-14 inset-x-0  transition-all top-4 z-30 w-full px-2 items-center justify-between animate-fade-down [--animation-delay:200ms]  opacity-0 -translaye-y-[20px]">
      <Link
        href="/"
        className="flex z-40 font-heading ml-1 md:ml-0 font-bold text-2xl"
      >
        <span>AskDoc.</span>
      </Link>
      <div className="hidden md:block py-6 mt-2 mr-5 ">
        <NavMenu isAuth={user ? true : false} />
      </div>
      <div className="">
        {!user ? (
          <LoginLink
            className={cn(
              "navmenu-styles",
              buttonVariants({
                variant: "outline",
                size: "lg",
              }),
              "font-semibold font-sans text-sm"
            )}
          >
            LOGIN
          </LoginLink>
        ) : (
          <UserAccountNav
            name={
              !user.given_name || !user.family_name
                ? "Your Account"
                : `${user.given_name} ${user.family_name}`
            }
            email={user.email ?? ""}
            imageUrl={user.picture ?? ""}
          />
        )}
      </div>
    </div>
  );
}
