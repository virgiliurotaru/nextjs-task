"use client";

import Link from "next/link";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <nav className="navbar bg-base-100 justify-end">
          <ul>
            <li>
              <Link
                href="/"
                className={`btn btn-ghost normal-case text-l ${
                  pathname === "/" ? "btn-active" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/todo"
                className={`btn btn-ghost normal-case text-l ${
                  pathname === "/todo" ? "btn-active" : ""
                }`}
              >
                Todo
              </Link>
            </li>
            <li>
              <Link
                href="/posts"
                className={`btn btn-ghost normal-case text-l ${
                  pathname === "/posts" ? "btn-active" : ""
                }`}
              >
                Posts
              </Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
