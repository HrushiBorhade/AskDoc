import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import React from "react";

type Props = {};

function HomePage({}: Props) {
  return (
    <div
      className="font-sans"
      // className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
    >
      <Navbar />
      <MaxWidthWrapper className="flex flex-col items-center justify-center text-center ">
        <div className="h-[100vh]  ">
          <div className=" mt-44 text-start leading-44 font-heading  text-5xl sm:text-7xl md:text-6xl lg:text-7xl animate-fade-in [--animation-delay:200ms] relative opacity-0 translaye-y-[10px]   ">
            {/* Engaging &<br /> Productive Document Experience */}
            <span className="text-shadow-white ">
              Ask Questions
              <br />
              Chat with your
            </span>
            <br className="block md:hidden" />
            <span className="ml-1 md:ml-4  tracking-tight font-heading clipped-text   ">
              Documents .
            </span>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="h-[100vh]">hello</div>
    </div>
  );
}

export default HomePage;
