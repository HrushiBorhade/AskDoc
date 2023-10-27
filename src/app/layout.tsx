import { cn, constructMetadata } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { Poppins, Montserrat, Lato, Syne } from "next/font/google";

import "react-loading-skeleton/dist/skeleton.css";
import "simplebar-react/dist/simplebar.min.css";
import { Toaster } from "@/components/ui/toaster";
import "next-cloudinary/dist/cld-video-player.css";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const fontPoppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600"],
});
export const fontMontserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600"],
});
export const fontLato = Lato({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "300", "400", "700", "900"],
});
export const fontSyne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const fontHeading = localFont({
  src: "../../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});
export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  const isAuth = !!user;
  return (
    <Providers>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body
          className={cn(
            "dark antialiased min-h-screen bg-black font-sans font-inter ",
            fontSans.className,
            fontSans.variable,
            fontPoppins.className,
            fontPoppins.variable,
            fontMontserrat.className,
            fontMontserrat.variable,
            fontLato.className,
            fontLato.variable,
            fontSyne.className,
            fontSyne.variable,
            fontHeading.variable,
            fontHeading.className
          )}
        >
          {children}
          <Toaster />
        </body>
      </html>
    </Providers>
  );
}
