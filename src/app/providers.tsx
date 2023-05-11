"use client";

import { PropsWithChildren } from "react";
import Head from "next/head";

import GlobalStyle from "./GlobalStyle";
GlobalStyle;

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <body>
        <GlobalStyle />
        {children}
      </body>
    </>
  );
}
