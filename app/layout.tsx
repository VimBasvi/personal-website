import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@fontsource/bodoni-moda/400.css";
import "@fontsource/bodoni-moda/600.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "Vimbisai Basvi | Engineer, Educator, Builder",
  description:
    "The personal website of Vimbisai Basvi—a software engineer, educator, and builder.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}