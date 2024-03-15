import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";  // import the Header component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dynamic navbar",
  description: "A dynamic navbar with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/> {/* add the Header component */}
        {children} 
        </body>
    </html>
  );
}
