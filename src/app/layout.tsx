"use client";

import "./globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { GlobalContextProvider } from "./_context/GolabalContext";
import { Provider } from "@/components/ui/provider";
import { SessionProvider } from "next-auth/react";
import { Suspense } from "react";
import { SuspenseLoading } from "./_components/Shared/Loading";
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient();

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <SessionProvider>
            <GlobalContextProvider>
              <Provider>
                <Suspense fallback={<SuspenseLoading />}>
                  <Toaster />
                  {children}
                </Suspense>
              </Provider>
            </GlobalContextProvider>
          </SessionProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
export default RootLayout;
