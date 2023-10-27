"use client";
import React, { useRef } from "react";
import Image from "next/image";

import signup from "../../public/signup.svg";
import document from "../../public/document.svg";
import doc from "../../public/doc.svg";
import doccc from "../../public/doccc.svg";
import { useInView } from "framer-motion";
type Props = {};
const steps = [
  {
    title: "Create an Account",
    subtitle: "Start out with our free plan or pro plan",
    src: signup,
  },
  {
    title: "Upload your Document",
    subtitle: "We'll make your pdf ready to chat.",
    src: doc,
  },
  {
    title: `Start the Conversation `,
    subtitle: "Streamlined Interaction. It's that simple :)",
    src: document,
  },
];
const Product = (props: Props) => {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  return (
    <div>
      <div className="flex my-20 flex-col lg:flex-row  flex-wrap gap-4 items-center justify-center">
        {steps.map((step, i) => {
          return (
            <div
              // ref={ref}
              className={`w-[375px] md:w-[550px] h-[300px] md:h-[350px]  
              
              product relative border rounded-2xl `}
              // style={{
              //   transform: isInView ? "none" : "translateY(20px)",
              //   opacity: isInView ? 1 : 0,
              //   transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              // }}
              key={i}
            >
              <div className="flex relative flex-col gap-2 p-4 ">
                <div className="flex  items-center justify-between">
                  <div className="rounded-full border-2 border-[subtext-gradient] px-4 py-[2px] aspect-square">
                    <div className="font-syne text-gradient text-2xl md:text-4xl   font-bold">
                      {i + 1}
                    </div>
                  </div>
                  <h1 className="font-syne text-gradient  text-xl md:text-2xl font-semibold">
                    {step.title}
                  </h1>
                </div>
                <div className="flex justify-end absolute -bottom-1 right-5">
                  <h3 className="font-syne text-md md:text-xl  text-slate-400  font-medium">
                    {step.subtitle}
                  </h3>
                </div>
              </div>
              <div
                className={`content-[''] h-[175px] md:h-[230px]  w-[320px] md:w-[413px]  rounded-xl absolute bottom-1 right-0 grainy rotate-180 $`}
              ></div>

              <Image
                src={step.src}
                width={350}
                height={200}
                alt="sign-up"
                className={`absolute right-0  md:w-[450px] md:h-[275px] bottom-0  `}
              />

              {/* <div className="xl:block hidden">
                <Image
                  src={i === steps.length - 1 ? doccc : step.src}
                  width={350}
                  height={200}
                  alt="sign-up"
                  className={` absolute right-0  md:w-[450px] md:h-[275px] bottom-0  ${
                    i === steps.length - 1
                      ? "xl:right-10 xl:w-[1100px] xl:h-[300px] xl:-bottom-10"
                      : ""
                  }    `}
                />
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
