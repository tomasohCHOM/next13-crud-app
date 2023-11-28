import React from "react";
import AuthButton from "./AuthButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center w-full h-16 border-b border-b-foreground/10">
      <div className="flex items-center justify-between w-full max-w-4xl p-3 text-sm">
        <Link href="/">
          <span className="text-lg cursor-pointer">Bloggrz</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/create">
            <span className="text-base cursor-pointer">Create</span>
          </Link>
          <AuthButton />
        </div>
      </div>
    </nav>
  );
}
