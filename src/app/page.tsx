"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import signup from "../../public/document.svg";
import Product from "@/components/Product";
import Pricing from "@/components/Pricing";

type Props = {};

function HomePage({}: Props) {
  const [user, setUser] = useState<any>();
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const getKindeSession = async () => {
      const res = await fetch("/api/kindeSession");
      const data = await res.json();
      setUser(data.user);
      setIsAuth(data.authenticated);
    };

    getKindeSession();
  }, []);

  useEffect(() => {
    (async () => {
      // @ts-ignore
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div
      className="font-sans  "
      // className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
    >
      <div className=" h-[100svh] md:h-[100vh] grainy ">
        <MaxWidthWrapper className="container flex flex-col  items-center justify-center text-center ">
          <div className=" text-center  mt-[80px] tracking-tight font-syne heading-styles  text-5xl sm:text-5xl md:text-6xl lg:text-[72px] animate-fade-in z-0 --animation-delay:200ms] relative opacity-0 translaye-y-[10px]  text-gradient  ">
            Ask Questions &<br /> Chat with your Documents.
          </div>
          {/* <Link
            href="/dashboard"
            className={cn(
              "navmenu-styles",
              "py-3 px-8 mt-4 font-medium font-syne text-lg rounded-xl "
            )}
          >
            Get Started
          </Link> */}
          <p className="text-lg mt-4 font-poppins tracking-tight subtext-gradient">
            Conversation with your Documents <br className="block md:hidden" />
            have never been easier
          </p>
          <div className="w-[360px] h-[230px] bg-white text-black md:w-[850px] mt-20 md:mt-10 rounded-2xl md:rounded-3xl md:h-[425px] flex items-center justify-center">
            Product Demo Video
            <br /> (Placeholder)
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="relative flex flex-col  grainy2 min-h-[150vh] md:min-h-[120vh]">
        <h1 className="heading-gradient-purple md:text-6xl text-3xl mt-20 text-center font-syne heading-styles">
          Engaging & Productive
          <br /> Document Experience
        </h1>
        <Product />
      </div>
      <Pricing isAuth={isAuth} />
    </div>
  );
}

export default HomePage;
