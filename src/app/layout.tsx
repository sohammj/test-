import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import UnicornStudioLoader from "@/components/UnicornStudioLoader";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "SovraTech",
  description:
    "Modern websites, AI-powered systems, and premium digital experiences by SovraTech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <UnicornStudioLoader />
        {children}
      </body>
    </html>
  );
}