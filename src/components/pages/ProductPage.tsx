"use client";
import React, { useRef } from "react";
import Product from "../Product";
import { useInView } from "framer-motion";
import Scroll from "../Scroll";
type Props = {};

const ProductPage = (props: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      id="product"
      className="relative flex flex-col  grainy2 min-h-[150vh] md:min-h-[120vh]"
    >
      <div ref={ref}>
        <h1
          className="heading-gradient-purple md:text-6xl text-3xl mt-10 text-center font-syne heading-styles"
          style={{
            transform: isInView ? "none" : "translateY(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
        >
          Engaging & Productive
          <br /> Document Experience
        </h1>
      </div>

      <Product />
    </div>
  );
};

export default ProductPage;
