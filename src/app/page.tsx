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
          <div className=" text-center mt-[80px] font-heading font-medium  text-5xl sm:text-7xl md:text-6xl lg:text-6xl animate-fade-in z-0 --animation-delay:200ms] relative opacity-0 translaye-y-[10px]  text-gradient  ">
            Ask Questions.
            <br />
            Chat with your Documents.
          </div>
          <p className="text-lg mt-4 font-poppins tracking-tight subtext-gradient">
            Engaging and Productive Document Experience
          </p>
          <div className="w-[380px] h-[250px] bg-white text-black md:w-[850px] mt-10 rounded-3xl md:h-[425px]  flex items-center justify-center">
            Product Demo Video
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="relative flex flex-col items-center justify-center  grainy2 min-h-screen">
        <h1 className="heading-gradient-purple text-6xl text-center font-heading">
          Engaging
          <br /> Document Experience
        </h1>
        <div className="grid  p-10  grid-cols-1 gap-8 mx-auto lg:grid-cols-3 ">
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
