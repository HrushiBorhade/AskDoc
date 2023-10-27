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
    <div className="py-10 w-full relative  h-[50vh] grainy">
      <MaxWidthWrapper className="mb-5">
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
            Built by
            <span className="mx-1 underline italic underline-offset-4 decoration-zinc-500 hover:text-slate-200 hover:decoration-slate-200 transition-colors">
              <a href="https://www.hrushiborhade.me/" target="_blank">
                Hrushi
              </a>
            </span>
          </p>
        </div>
        <div>
          <p className="text-lg mt-5 subtext-gradient font-poppins  ">
            © 2023 AskDoc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
