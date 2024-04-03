import React from "react";
import PocketBase from "pocketbase";
import { Article } from "@/interface/interface";

async function getNote(id: string) {
  const pb = new PocketBase("http://127.0.0.1:8090");
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
