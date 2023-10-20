"use client";
import { Card } from "@/components/Card";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect } from "react";

type Props = {};

function HomePage({}: Props) {
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
            Engaging and Productive Document Experience
          </p>
          <div className="w-[360px] h-[230px] bg-white text-black md:w-[850px] mt-20 md:mt-10 rounded-2xl md:rounded-3xl md:h-[425px] flex items-center justify-center">
            Product Demo Video
          </div>
        </MaxWidthWrapper>
        {/* <div className="absolute bottom-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            fill="none"
            viewBox="0 0 2075 630"
          >
            <path
              style="stroke-dashoffset: 0, stroke-dasharray: none"
              id="line-wrapper"
              stroke="url(#paint0_linear_4_312)"
              stroke-linecap="round"
              stroke-width="14.033"
              d="M8 8c40.104 75.967 130.628 80.498 141.715 307.53 11.086 227.033 111.081 284.033 342.864 218.509 123.312-34.859 163.177 90.753 234.57 88.405 64.02-2.104 73-103.445 36.089-139.199-36.911-35.754-90.158 31.306-14.077 96.578 60.865 52.218 331.219-78.753 515.369-113.058 184.14-34.304 169.25 150.427 471.96 103.909 302.7-46.518 331.15-130.311 331.15-130.311"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_4_312"
                x1="-170.533"
                x2="2067.64"
                y1="26.976"
                y2="445.22"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset=".205"
                  stop-color="#F6DFF5"
                  stop-opacity=".1"
                ></stop>
                <stop
                  offset=".255"
                  stop-color="#F0CDEF"
                  stop-opacity=".5"
                ></stop>
                <stop offset=".334" stop-color="#E09EDF"></stop>
                <stop offset=".532" stop-color="#E5A1E4"></stop>
                <stop offset=".714" stop-color="#F2E0FE"></stop>
                <stop offset=".891" stop-color="#7170B7"></stop>
                <stop offset=".972" stop-color="#7176BB"></stop>
                <stop offset="1" stop-color="#717ABE"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div> */}
      </div>
      <div className="relative flex flex-col items-center justify-center  grainy2 min-h-screen">
        <h1 className="heading-gradient-purple md:text-6xl text-3xl text-center font-syne heading-styles">
          Engaging & Productive
          <br /> Document Experience
        </h1>
      </div>
    </div>
  );
}

export default HomePage;
