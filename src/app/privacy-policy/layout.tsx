"use client";

import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { Suspense } from "react";

import { Banner } from "../_components/Shared/Banner";
import { Companies } from "../_components/Shared/Companies";
import CopyrightBar from "../_components/Shared/Copyright";
import Footer from "../_components/Shared/Footer";
import { GlobalContextProvider } from "../_context/GolabalContext";
import { Header1 } from "../_components/Shared/Header1";
import { Services } from "../_components/Shared/Services";
import { SuspenseLoading } from "../_components/Shared/Loading";
import TopMenu from "../_components/Shared/TopMenu";
import withContextProvider from "../_HOC/withContextProvider";

const PolicyLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Suspense fallback={<SuspenseLoading />}>
      <TopMenu />
      <Header1 />

      <Services />
      <Banner />
      {/* Main Content Area */}
      <Box>{children}</Box>
      <Companies />
      <Footer />
      <CopyrightBar />
    </Suspense>
  );
};

const AILayout = withContextProvider(GlobalContextProvider)(PolicyLayout);
export default AILayout;
