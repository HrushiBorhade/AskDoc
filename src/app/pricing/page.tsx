import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductDemoContainer from "@/components/ProductDemoContainer";
import UpgradeButton from "@/components/UpgradeButton";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PLANS } from "@/config/stripe";
import { cn } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { ArrowRight, Check, Gem, HelpCircle, Minus } from "lucide-react";
import Link from "next/link";

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isAuth = !!user;
  console.log(isAuth);
  const pricingItems = [
    {
      plan: "Free",
      tagline: "For small side projects.",
      quota: 10,
      features: [
        {
          text: "10 pages per PDF",
          footnote: "The maximum amount of pages per PDF-file.",
        },
        {
          text: "5MB file size limit",
          footnote: "The maximum file size of a single PDF file.",
        },
        {
          text: "Mobile-friendly interface",
        },
        {
          text: "Higher-quality responses",
          footnote: "Better algorithmic responses for enhanced content quality",
          negative: true,
        },
        {
          text: "Priority support",
          negative: true,
        },
      ],
    },
    {
      plan: "Pro",
      tagline: "For larger projects with higher needs.",
      quota: PLANS.find((p) => p.slug === "pro")!.quota,
      features: [
        {
          text: "25 pages per PDF",
          footnote: "The maximum amount of pages per PDF-file.",
        },
        {
          text: "20MB file size limit",
          footnote: "The maximum file size of a single PDF file.",
        },
        {
          text: "Mobile-friendly interface",
        },
        {
          text: "Higher-quality responses",
          footnote: "Better algorithmic responses for enhanced content quality",
        },
        {
          text: "Priority support",
        },
      ],
    },
  ];

  return (
    <div id="pricing" className="max-h-screen">
      <MaxWidthWrapper className="font-sans mt-20  text-center max-w-5xl">
        <div className="mx-auto  sm:max-w-lg">
          <h1 className="text-6xl font-bold font-syne text-gradient sm:text-7xl">
            Pricing
          </h1>
          <p className="mt-3 text-gray-600 font-normal  font-poppins subtext-gradient sm:text-lg">
            Whether you&apos;re just trying out our service
            <br /> or need more, we&apos;ve got you covered.
          </p>
        </div>

        <div className="pt-8 grid grid-cols-1 order-1 md:order-2 gap-10 lg:grid-cols-2">
          <TooltipProvider>
            {pricingItems.map(({ plan, tagline, quota, features }) => {
              const price =
                PLANS.find((p) => p.slug === plan.toLowerCase())?.price
                  .amount || 0;

              return (
                <div
                  key={plan}
                  className={cn("relative rounded-2xl pricing ", {
                    " ": plan === "Pro",
                    "": plan !== "Pro",
                  })}
                >
                  {plan === "Pro" && (
                    <div className="absolute -top-5 left-0 right-0 mx-auto w-36 rounded-full upgrade px-3 py-2 text-sm  flex items-center font-medium justify-center text-white">
                      Upgrade now
                      <Gem className="h-3 w-3 ml-1 text-white" />
                    </div>
                  )}

                  <div className="p-5">
                    <h3 className="my-3 text-center font-display text-3xl font-syne text-gradient font-bold">
                      {plan}
                    </h3>
                    {/* <p className="text-gray-500">{tagline}</p> */}
                    <p className="my-5 font-display text-6xl font-semibold">
                      ₹{price}
                    </p>
                    <p className="text-gray-500 font-poppins">per month</p>
                  </div>

                  {/* <div className="flex h-14 font-poppins items-center justify-center border-b border-t border-[rgba(255,255,255,0.05)] ">
                    <div className="flex items-center space-x-1">
                      <p>{quota.toLocaleString()} PDFs/mo included</p>

                      <Tooltip delayDuration={300}>
                        <TooltipTrigger className="cursor-default ml-1.5">
                          <HelpCircle className="h-4 w-4 text-zinc-500" />
                        </TooltipTrigger>
                        <TooltipContent className="  w-80 p-2 rounded-xl gradient-button">
                          How many PDFs you can upload per month.
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div> */}

                  <ul className="my-5 space-y-5 px-8">
                    {features.map(({ text, footnote, negative }) => (
                      <li key={text} className="flex space-x-5">
                        <div className="flex-shrink-0">
                          {negative ? (
                            <Minus className="h-6 w-6 text-zinc-500" />
                          ) : (
                            <Check className="h-6 w-6 text-violet-950" />
                          )}
                        </div>
                        {footnote ? (
                          <div className="flex items-center space-x-1">
                            <p
                              className={cn("text-zinc-400", {
                                "text-zinc-500": negative,
                              })}
                            >
                              {text}
                            </p>
                            <Tooltip delayDuration={300}>
                              <TooltipTrigger className="cursor-default ml-1.5">
                                <HelpCircle className="h-4 w-4 text-zinc-500" />
                              </TooltipTrigger>
                              <TooltipContent className="w-80 p-2 rounded-xl gradient-button">
                                {footnote}
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        ) : (
                          <p
                            className={cn("text-zinc-400", {
                              "text-zinc-500": negative,
                            })}
                          >
                            {text}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className="" />
                  <div className="p-5">
                    {plan === "Free" ? (
                      <Link
                        href={isAuth ? "/dashboard" : "/sign-in"}
                        className={cn(
                          "pricing-button-styles ",
                          buttonVariants({
                            className: "w-full",
                            variant: "outline",
                            size: "lg",
                          })
                        )}
                      >
                        {isAuth ? "Upgrade now" : "Sign up"}
                        <ArrowRight className="h-5 w-5 ml-1.5" />
                      </Link>
                    ) : isAuth ? (
                      <UpgradeButton />
                    ) : (
                      <Link
                        href="/sign-in"
                        className={cn(
                          "pricing-button-styles ",
                          buttonVariants({
                            className: "w-full",
                            variant: "outline",
                            size: "lg",
                          })
                        )}
                      >
                        {isAuth ? "Upgrade now" : "Sign up"}
                        <ArrowRight className="h-5 w-5 ml-1.5" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </TooltipProvider>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
