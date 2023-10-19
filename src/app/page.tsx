import { Card } from "@/components/Card";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

type Props = {};

function HomePage({}: Props) {
  return (
    <div
      className="font-sans  "
      // className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
    >
      <div className=" h-[100svh] md:h-[100vh] grainy ">
        <Navbar />
        <MaxWidthWrapper className="container flex flex-col items-center justify-center text-center ">
          <div className=" text-center leading mt-[80px] font-heading font-medium leading-loose text-5xl sm:text-7xl md:text-6xl lg:text-6xl animate-fade-in z-0 --animation-delay:200ms] relative opacity-0 translaye-y-[10px]  text-gradient  ">
            Ask Questions.
            <br />
            Chat with your Documents.
          </div>
          <p className="text-lg mt-4 font-poppins tracking-tight subtext-gradient">
            Engaging and Productive Document Experience
          </p>
          <div className="w-[380px] h-[250px] bg-white text-black md:w-[850px] mt-20 md:mt-10 rounded-3xl md:h-[425px]  flex items-center justify-center">
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
        <h1 className="heading-gradient-purple text-6xl text-center font-heading">
          Engaging
          <br /> Document Experience
        </h1>
        <div className="grid  mt-[80px] p-10  grid-cols-1 gap-8 mx-auto lg:grid-cols-3 ">
          <div className=" h-[300px] w-[350px] border-slate-300 border  rounded-xl  ">
            <div className="bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
              <Card>
                <Link href={``}>
                  <article className="relative h-[200px] w-[400px] texture p-4 md:p-8">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-xs text-zinc-100">
                        <span>SOON</span>
                      </div>
                    </div>

                    <h2
                      id="featured-post"
                      className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                    >
                      Example Title
                    </h2>
                    <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                      this is mocl description for testing
                    </p>
                    <div className="absolute bottom-4 md:bottom-8">
                      <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                        Read more <span aria-hidden="true">&rarr;</span>
                      </p>
                    </div>
                  </article>
                </Link>
              </Card>
            </div>

            <div className="h-[100px] bg-slate-100 rounded-2xl">
              <h2>temp text heading</h2>
            </div>
          </div>
          <div className=" h-[350px] w-[400px] border-slate-300 border  rounded-xl bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 ">
            <Card>
              <Link href={``}>
                <article className="relative h-[250px] w-[400px] texture p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                      <span>SOON</span>
                    </div>
                  </div>

                  <h2
                    id="featured-post"
                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                  >
                    Example Title
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    this is mocl description for testing
                  </p>
                  <div className="absolute bottom-4 md:bottom-8">
                    <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                      Read more <span aria-hidden="true">&rarr;</span>
                    </p>
                  </div>
                </article>
              </Link>
            </Card>
            <div className="h-[100px] bg-black">
              <h2>temp text heading</h2>
            </div>
          </div>
          <div className=" h-[350px] w-[400px] border-slate-300 border  rounded-xl bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 ">
            <Card>
              <Link href={``}>
                <article className="relative h-[250px] w-[400px] texture p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                      <span>SOON</span>
                    </div>
                  </div>

                  <h2
                    id="featured-post"
                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                  >
                    Example Title
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    this is mocl description for testing
                  </p>
                  <div className="absolute bottom-4 md:bottom-8">
                    <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                      Read more <span aria-hidden="true">&rarr;</span>
                    </p>
                  </div>
                </article>
              </Link>
            </Card>
            <div className="h-[100px] bg-black">
              <h2>temp text heading</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
