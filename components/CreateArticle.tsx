"use client";

import React, { useState } from "react";
import { pb } from "@/data/db";
import { navigateHome } from "@/app/actions";

export default function CreateArticle() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const create = async () => {
    await pb.collection("articles").create({
      title,
      content,
    });
  };

  return (
    <form
      onSubmit={create}
      action={navigateHome}
      className="flex w-[min(80vw,_40rem)] flex-col items-center justify-center gap-4 rounded-2xl border-2 border-slate-400 bg-darker p-6 md:p-10"
    >
      <h3 className="text-2xl font-semibold">New Article</h3>
      <div className="w-full">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-xl border-2 border-foreground bg-transparent px-2 py-1 outline-none"
        />
      </div>

      <div className="w-full">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full resize-none rounded-xl border-2 border-foreground bg-transparent px-2 py-1 outline-none"
        />
      </div>
      <button
        type="submit"
        className="cursort-pointer w-full rounded-2xl bg-btn-background p-3 transition hover:bg-btn-background-hover"
      >
        Create Article
      </button>
    </form>
  );
}
