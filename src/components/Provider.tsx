"use client";
import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

ThemeProvider.displayName = "ThemeProvider";

type PWC<T = unknown> = PropsWithChildren<T>;

const Provider = ({ children }: PWC) => (
  <ThemeProvider attribute="class" defaultTheme="dark">{children}</ThemeProvider>
);

export default Provider;
