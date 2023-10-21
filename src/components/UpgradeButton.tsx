"use client";

import { ArrowRight, Gem } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { trpc } from "@/app/_trpc/client";
import { cn } from "@/lib/utils";

const UpgradeButton = () => {
  const { mutate: createStripeSession } = trpc.createStripeSession.useMutation({
    onSuccess: ({ url }) => {
      window.location.href = url ?? "/dashboard/billing";
    },
  });

  return (
    <button
      onClick={() => {
        console.log("stripe");
        createStripeSession();
      }}
      className={cn(
        "pricing-button-styles ",
        buttonVariants({
          className: "w-full",
          variant: "outline",
          size: "lg",
        })
      )}
    >
      Upgrade now <ArrowRight className="h-5 w-5 ml-1.5" />
    </button>
  );
};

export default UpgradeButton;
