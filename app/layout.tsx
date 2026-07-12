import type { Metadata } from "next";
import Script from "next/script";
import "@fontsource/bodoni-moda/400.css";
import "@fontsource/bodoni-moda/600.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vimbisai Basvi | Engineer, Educator, Builder",
  description: "The personal website of Vimbisai Basvi—a software engineer, educator, and builder.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<Script src="https://mcp.figma.com/mcp/html-to-design/capture.js" strategy="afterInteractive" /></body></html>;
}
