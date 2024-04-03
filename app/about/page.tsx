import React from "react";

export default function About() {
  return (
    <section className="flex max-w-[50ch] flex-col gap-4">
      <p>
        This website is an example of creating a Next.js 14 CRUD application
        using a PocketBase backend. This example was inspired by{" "}
        <a
          className="underline"
          target="_blank"
          href="https://www.youtube.com/watch?v=__mSgDEOyv8"
        >
          Fireship Next.js 13 Tutorial
        </a>
        {"."}
      </p>
      <p>
        You can check out the original repository{" "}
        <a
          className="underline"
          target="_blank"
          href="https://github.com/tomasohCHOM/next14-crud-app"
        >
          here
        </a>
        {". "}
        Thanks for stopping by!
      </p>
    </section>
  );
}
