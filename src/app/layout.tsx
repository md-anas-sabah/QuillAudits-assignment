import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import Navbar from "@/components/Navbar";

const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });

export const metadata: Metadata = {
  title: "QuillAudits",
  description: "Intern task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(cn("relative h-full antialiased"), jost.variable)}>
        <div className="">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
