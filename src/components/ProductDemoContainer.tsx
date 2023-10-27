import React, { Suspense } from "react";
import ProductDemo from "./ProductDemo";
import Image from "next/image";

type Props = {};

const ProductDemoContainer = (props: Props) => {
  return (
    <div className="flex items-center justify-center animate-fade-in [--animation-delay:600ms]  opacity-0 translaye-y-[20px] ">
      {/* <ProductDemo /> */}
      <Image
        className="w-[360px] h-[230px] md:w-[850px] mt-20 md:mt-10 rounded-2xl md:rounded-3xl md:h-[425px]"
        width={1920}
        height={1080}
        src="/demo-temp.png"
        alt="demo-image-temp"
      />

      {/* <h1 className="text-slate-400 font-syne">
        Product Demo Video
        <br /> (Placeholder)
      </h1> */}
    </div>
  );
};

export default ProductDemoContainer;
