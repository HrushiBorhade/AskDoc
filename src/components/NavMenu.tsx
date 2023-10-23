"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";

type Prop = {
  isAuth: boolean;
};
export default function NavMenu({ isAuth }: Prop) {
  return (
    <NavigationMenu className="navmenu-styles py-[2px]">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/#product" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "font-medium font-sans tracking-tight text-gray-300  hover:bg-[#121212]"
              )}
            >
              Product
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {isAuth ? (
          <>
            <NavigationMenuItem>
              <Link href="/dashboard" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "font-medium font-sans tracking-tight text-gray-300  hover:bg-[#121212]"
                  )}
                >
                  Dashboard
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </>
        ) : (
          <>
            <NavigationMenuItem>
              <Link href="/#features" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "font-medium font-sans tracking-tight text-gray-300  hover:bg-[#121212]"
                  )}
                >
                  Features
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </>
        )}
        <NavigationMenuItem>
          <Link href="/#pricing" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "font-medium font-sans tracking-tight text-gray-300  hover:bg-[#121212]"
              )}
            >
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
