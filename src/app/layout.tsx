"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "./provider";
import Header from "@/components/header";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showHeader = ["/dashboard", "/tasks", "/challenges"].includes(pathname);
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            {showHeader && <Header />}
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
