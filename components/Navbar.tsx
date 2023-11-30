import React from "react";
import AuthButton from "./AuthButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex h-16 w-full justify-center border-b border-b-foreground/20">
      <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
        <Link href="/">
          <span className="cursor-pointer text-lg">Bloggrz</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/create">
            <span className="cursor-pointer text-base hover:text-contrast">
              Create
            </span>
          </Link>
          <AuthButton />
        </div>
      </div>
    </nav>
  );
}
