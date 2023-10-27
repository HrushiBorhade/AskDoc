import React, { Suspense } from "react";
import ProductDemo from "./ProductDemo";
import Image from "next/image";

type Props = {};

const ProductDemoContainer = (props: Props) => {
  return (
    // <div className="mt-5 flex items-center justify-center animate-fade-in [--animation-delay:600ms]  opacity-0 translaye-y-[20px] lg:bg-black rounded-2xl md:rounded-3xl lg:px-4 lg:pb-4 p-2">
    //   {/* <ProductDemo /> */}
    //   <Image
    //     className="w-[360px] h-[200px] lg:w-[850px] mt-20 md:mt-10 rounded-2xl md:rounded-3xl lg:h-[450px]"
    //     width={1920}
    //     height={1080}
    //     src="/demo-temp.png"
    //     alt="demo-image-temp"
    //   />

    //   {/* <h1 className="text-slate-400 font-syne">
    //     Product Demo Video
    //     <br /> (Placeholder)
    //   </h1> */}
    // </div>
    <div className="mx-auto max-w-4xl mt-20 lg:mt-10  ">
      <div className=" flow-root">
        <div className="">
          <Image
            src="/demo-temp.png"
            alt="product preview"
            width={1364}
            height={866}
            quality={100}
            className="rounded-2xl lg:rounded-3xl p-2  bg-black ring-1 ring-gray-900/10"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDemoContainer;
