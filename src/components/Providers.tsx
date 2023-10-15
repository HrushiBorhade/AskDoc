import { ClerkProvider } from "@clerk/nextjs";
import React, { PropsWithChildren, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default Providers;
