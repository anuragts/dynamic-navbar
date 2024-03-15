"use client";  // don't remove this line, usePathname is a client-side function
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";  

// more info about usePathname - https://nextjs.org/docs/app/api-reference/functions/use-pathname

export default function Header() {
  const pathname = usePathname();
  console.log(pathname);   // remove this log

  return (
    <>
      <header className="flex items-center justify-between p-4 bg-slate-900 text-white">
        <h1 className="text-2xl font-bold">Dynamic navbar</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              {pathname === "/about" ? (
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              ) : (
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              )}
            </li>

            {/* HOW TO DO THIS IF THERE ARE MORE THAN 2 ROUTES */}

            {/* <li>
              {pathname === "/" ? (
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              ) : pathname === "/about" ? (
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              ) : pathname === "/contact" ? (
                <Link href="/info" className="hover:underline">
                  Info
                </Link>
              ) : (
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              )}
            </li> */}
          </ul>
        </nav>
      </header>
    </>
  );
}
