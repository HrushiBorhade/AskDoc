"use client";
import React from "react";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
type Props = {};

const ProductDemo = (props: Props) => {
  return (
    <div className="">
      <CldVideoPlayer
        id="product-demo"
        src="/product1"
        height={1080}
        width={1920}
        className="w-[360px] h-[230px] md:w-[850px] mt-20 md:mt-10 rounded-2xl md:rounded-3xl md:h-[425px]"
      />
    </div>
  );
};

export default ProductDemo;
