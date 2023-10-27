import React, { Suspense } from "react";
import ProductDemo from "./ProductDemo";

type Props = {};

const ProductDemoContainer = (props: Props) => {
  return (
    <div className="w-[360px] h-[230px] md:w-[850px] mt-20 md:mt-10 rounded-2xl md:rounded-3xl md:h-[425px] flex items-center justify-center animate-fade-in [--animation-delay:600ms] border opacity-0 translaye-y-[20px] ">
      {/* <Suspense fallback={<p>Product Video Demo.</p>}>
        <ProductDemo />
      </Suspense> */}
      <h1 className="text-slate-400 font-syne">
        Product Demo Video
        <br /> (Placeholder)
      </h1>
    </div>
  );
};

export default ProductDemoContainer;
