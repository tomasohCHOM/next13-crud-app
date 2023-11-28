import React from "react";

export default function CreateArticle() {
  return (
    <form className="flex flex-col items-center justify-center max-w-3xl gap-4 p-10 border-2 border-foreground">
      <h3>New Article</h3>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        className="w-full px-2 py-1 bg-transparent border-2 outline-none rounded-xl border-foreground"
      />
      <label htmlFor="content">Content</label>
      <textarea
        id="content"
        name="content"
        rows={5}
        className="w-full px-2 py-1 bg-transparent border-2 outline-none resize-none rounded-xl border-foreground"
      />
      <button
        type="submit"
        className="p-3 transition bg-btn-background rounded-2xl hover:bg-btn-background-hover cursort-pointer"
      >
        Add Article
      </button>
    </form>
  );
}
