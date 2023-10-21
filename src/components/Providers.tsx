"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren, ReactNode, useState } from "react";

import { httpBatchLink } from "@trpc/client";
import { trpc } from "@/app/_trpc/client";
import { absoluteUrl } from "@/lib/utils";
type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: absoluteUrl("/api/trpc"),
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};

export default Providers;
