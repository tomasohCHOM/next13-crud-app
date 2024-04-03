import React from "react";
import type { Article } from "@/data/interface";
import { pb } from "@/data/db";

async function getNote(id: string) {
  const article = await pb.collection("articles").getOne<Article>(id);
  return article;
}

export default async function ArticlePage({
  params,
}: {
  params: { id: string };
}) {
  const article = await getNote(params.id);

  return (
    <article className="flex max-w-[50ch] flex-col items-center gap-8">
      <h2 className="text-3xl font-semibold">{article.title}</h2>
      <p>{article.content}</p>
    </article>
  );
}
