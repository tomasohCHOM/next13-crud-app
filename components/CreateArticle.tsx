import React from "react";

export default function CreateArticle() {
  return (
    <form className="flex flex-col items-center justify-center w-[min(80vw,_40rem)] gap-4 p-6 border-2 border-foreground md:p-10 bg-darker rounded-2xl">
      <h3 className="text-2xl font-semibold">New Article</h3>
      <div className="w-full">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          className="w-full px-2 py-1 bg-transparent border-2 outline-none rounded-xl border-foreground"
        />
      </div>

      <div className="w-full">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          rows={5}
          className="w-full px-2 py-1 bg-transparent border-2 outline-none resize-none rounded-xl border-foreground"
        />
      </div>
      <button
        type="submit"
        className="w-full p-3 transition bg-btn-background rounded-2xl hover:bg-btn-background-hover cursort-pointer"
      >
        Add Article
      </button>
    </form>
  );
}
