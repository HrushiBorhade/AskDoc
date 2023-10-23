import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import {
  Github,
  GithubIcon,
  Linkedin,
  LinkedinIcon,
  Mail,
  Twitter,
} from "lucide-react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="py-10 w-full relative  h-[60vh] grainy">
      <MaxWidthWrapper className="">
        <div className="py-20 border-t-2 border-slate-[rgba(255,255,255,0.05)] flex items-center justify-around gap-10  md:px-20">
          <div className="flex flex-col items-center justify-center">
            <span className="text-gradient font-syne ml-1  font-bold text-4xl">
              AskDoc.
            </span>
            <span className=" mt-2 subtext-gradient font-syne ml-1  font-semibold text-base">
              Ask Quesions & Chat <br />
              with your Documents
            </span>
          </div>
          <div className="flex items-center justify-start">
            <div className="flex flex-col items-start justify-center">
              <Link href="/" className="font-syne ml-1  font-normal text-lg">
                <span>Home.</span>
              </Link>
              <Link
                href="/dashboard"
                className="font-syne ml-1  font-normal text-lg"
              >
                <span>Dashboard.</span>
              </Link>
            </div>
            {/* <div>
              <div className="flex flex-col items-start justify-center">
                <Link
                  href="/"
                  className="font-poppins ml-1  font-normal text-lg"
                >
                  <span>Terms & Conditions.</span>
                </Link>
                <Link
                  href="/"
                  className="font-poppins ml-1  font-normal text-lg"
                >
                  <span>Privacy policy.</span>
                </Link>
                <Link
                  href="/"
                  className="font-poppins ml-1  font-normal text-lg"
                >
                  <span>Cookies policy..</span>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="absolute bottom-10 w-full flex  justify-center items-center flex-col ">
        <div className="navmenu-styles flex justify-center items-center px-8 py-2">
          <div className="flex  gap-2 justify-center items-center">
            <Link href="https://www.linkedin.com/in/hrushikesh-borhade-9b742b1bb/">
              <LinkedinIcon className="w-4 h-4 font-semibold text-slate-300 hover:text-sky-700 transition-colors" />
            </Link>
            <Link href="https://twitter.com/BorhadeHrushi">
              <Twitter className="w-4 h-4 font-semibold text-slate-300 hover:text-blue-800 transition-colors" />
            </Link>
            <Link href="https://github.com/HrushiBorhade">
              <GithubIcon className="w-4 h-4 font-semibold text-slate-300 hover:text-teal-700 transition-colors" />
            </Link>
          </div>
          <p className="text-xl ml-2 text-gradient font-syne  ">
            Built by Hrushi
          </p>
        </div>
        <div>
          <p className="text-lg mt-5 text-gradient font-poppins  ">
            © 2023 AskDoc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
