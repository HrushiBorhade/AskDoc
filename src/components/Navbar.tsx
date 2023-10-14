"use client";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { NavigationMenu } from "./ui/navigation-menu";
import NavMenu from "./NavMenu";
import { buttonVariants } from "./ui/button";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="sticky h-18 inset-x-0 top-0 z-30 w-full  backdrop-blur-lg transition-all">
      <MaxWidthWrapper className="py-6">
        <div className="flex h-14 container items-center justify-between ">
          <Link href="/" className="flex z-40 font-heading font-bold text-3xl">
            <span>AskDoc.</span>
          </Link>
          <div className="hidden md:block">
            <NavMenu />
          </div>
          <div>
            <Link href="">
              <button
                className={buttonVariants({
                  className: "font-semibold text-base rounded-full py-6",
                  size: "lg",
                })}
              >
                LOGIN
              </button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;