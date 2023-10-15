import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import React from "react";

type Props = {};

function HomePage({}: Props) {
  return (
    <div
    // className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
    >
      <Navbar />
      <MaxWidthWrapper className="flex flex-col items-center justify-center text-center ">
        <div className="h-[100vh]  ">
          <div className="mt-44 text-start leading-44 font-heading text-gradient text-5xl sm:text-5xl md:text-8xl lg:text-8xl animate-fade-in [--animation-delay:200ms] relative opacity-0 translaye-y-[10px]   text-shadow-white ">
            {/* Engaging &<br /> Productive Document Experience */}
            Ask Questions &
            <br />
            Chat with your
            <br className="block md:hidden" />
            <span className="ml-1 md:ml-4 mix-blend-screen  ">Documents</span>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="h-[100vh]">hello</div>
    </div>
  );
}

export default HomePage;
