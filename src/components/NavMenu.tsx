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
import { Github } from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  // {
  //   title: "Scroll-area",
  //   href: "/docs/primitives/scroll-area",
  //   description: "Visually or semantically separates content.",
  // },
  // {
  //   title: "Tabs",
  //   href: "/docs/primitives/tabs",
  //   description:
  //     "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  // },
  // {
  //   title: "Tooltip",
  //   href: "/docs/primitives/tooltip",
  //   description:
  //     "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  // },
];
type Prop = {
  isAuth: boolean;
};
export default function NavMenu({ isAuth }: Prop) {
  return (
    <NavigationMenu className="navmenu-styles py-[2px]">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
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

        <NavigationMenuItem className="">
          <NavigationMenuTrigger className="font-medium font-sans tracking-tight text-gray-300  hover:bg-[#121212]">
            Features
          </NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[490px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/dashboard" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "font-medium  font-sans tracking-tight text-gray-300  hover:bg-[#121212] "
              )}
            >
              Dashboard
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* {!isAuth && ( */}
        {/* <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "font-semibold text-primary-text hover:text-black hover:bg-white "
              )}
            >
              SIGN UP
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
        {/* )} */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-2xl py-5 px-3 leading-none no-underline outline-none transition-colors hover:bg-gray-900 ",
            className
          )}
          {...props}
        >
          <div className="text-bases font-semibold leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground ">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
