import Product from "@/components/Product";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  return (
    <div className="relative flex flex-col grainy2 pb-20 min-h-[100vh]">
      <h1 className="heading-gradient-purple md:text-6xl text-3xl mt-16 text-center font-syne heading-styles">
        Engaging & Productive
        <br /> Document Experience
      </h1>
      <Product />
    </div>
  );
};

export default page;
