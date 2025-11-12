"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import * as React from "react";

const ThemeProvider = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemeProvider>) => {
  return (
    <NextThemeProvider attribute="class" {...props}>
      {children}
    </NextThemeProvider>
  );
};
export default ThemeProvider;
