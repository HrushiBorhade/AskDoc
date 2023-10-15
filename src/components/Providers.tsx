import { ClerkProvider } from "@clerk/nextjs";
import React, { PropsWithChildren, ReactNode } from "react";
import { dark } from "@clerk/themes";
type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      {children}
    </ClerkProvider>
  );
};

export default Providers;
