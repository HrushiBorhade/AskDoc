"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren, ReactNode, useState } from "react";
import { dark } from "@clerk/themes";
import { trpc } from "@/app/_trpc/client";
import { httpBatchLink } from "@trpc/client";
type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000/api/trpc",
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ClerkProvider
          appearance={{
            baseTheme: dark,
          }}
        >
          {children}
        </ClerkProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default Providers;
