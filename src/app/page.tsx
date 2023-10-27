import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import signup from "../../public/document.svg";
import Product from "@/components/Product";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import ProductPage from "@/components/pages/ProductPage";
import Scroll from "@/components/Scroll";
import ProductDemo from "@/components/ProductDemo";
import "next-cloudinary/dist/cld-video-player.css";
import { Suspense } from "react";
import ProductDemoContainer from "@/components/ProductDemoContainer";
import Navbar from "@/components/Navbar";

type Props = {};

function HomePage({}: Props) {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  const isAuth = !!user;

  // useEffect(() => {
  //   (async () => {
  //     // @ts-ignore
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll({
  //       smooth: true,
  //     });
  //   })();
  // }, []);
  return (
    <div
      className="font-sans  "
      // className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
    >
      <Navbar />
      <div className=" h-[100svh] grainy ">
        <MaxWidthWrapper className="container flex flex-col  items-center justify-center text-center ">
          <div className="animate-fade-in  [--animation-delay:600ms] opacity-0 translaye-y-[20px] ">
            <div className=" text-center  mt-[80px] tracking-tight font-syne heading-styles  text-5xl sm:text-5xl md:text-6xl lg:text-[72px] z-0  relative  text-gradient  ">
              Ask Questions &<br /> Chat with your Documents.
            </div>
            {/* <Link
            href="/dashboard"
            className={cn(
              "navmenu-styles",
              "py-3 px-8 mt-4 font-medium font-syne text-lg rounded-xl "
            )}
          >
            Get Started
          </Link> */}
            <p className="text-lg mt-4 font-poppins tracking-tight subtext-gradient">
              Conversation with your Documents{" "}
              <br className="block md:hidden" />
              have never been easier
            </p>
            <ProductDemoContainer />
          </div>
        </MaxWidthWrapper>
      </div>
      <Scroll />
      <ProductPage />
      <Pricing isAuth={isAuth} />
      <Footer />
    </div>
  );
}

export default HomePage;
