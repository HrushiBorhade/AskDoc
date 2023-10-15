import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { Poppins, Montserrat } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "react-loading-skeleton/dist/skeleton.css";
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

const fontHeading = localFont({
  src: "../../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <ClerkProvider
        appearance={{
          baseTheme: dark,
        }}
      >
        <html lang="en">
          <body
            className={cn(
              "dark antialiased min-h-screen grainy font-sans font-inter bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-black to-black",
              fontSans.className,
              fontSans.variable,
              fontPoppins.className,
              fontPoppins.variable,
              fontMontserrat.className,
              fontMontserrat.variable,
              fontHeading.variable,
              fontHeading.className
            )}
          >
            {children}
          </body>
        </html>
      </ClerkProvider>
    </Providers>
  );
}
