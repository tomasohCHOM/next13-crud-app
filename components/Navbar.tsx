import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex h-16 w-full justify-center border-b border-b-foreground/20">
      <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
        <Link href="/">
          <span className="cursor-pointer text-lg font-semibold">Bloggrz</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/create">
            <span className="cursor-pointer text-base font-medium">Create</span>
          </Link>
          <Link href="/about">
            <span className="cursor-pointer text-base font-medium">About</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
