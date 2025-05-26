"use client";

import React, { createContext, useContext } from "react";

interface GlobalContext {}

const GlobalContext = createContext<GlobalContext>({});

const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};

const useGlobalProvider = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalProvider must be used within a GlobalContextProvider"
    );
  }
  return context;
};

export { GlobalContextProvider, useGlobalProvider };
