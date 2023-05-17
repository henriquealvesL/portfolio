"use client";

import { PropsWithChildren } from "react";

import GlobalStyle from "@/app/GlobalStyle";

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
