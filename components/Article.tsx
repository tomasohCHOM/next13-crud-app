import React from "react";
import PocketBase from "pocketbase";
import { Article } from "@/interface/interface";
import Link from "next/link";

async function getArticles() {
  const pb = new PocketBase("http://127.0.0.1:8090");
  const data = await pb
    .collection("articles")
    .getFullList<Article>({ sort: "-created" });
  return data;
}

function Article({
  title,
  content,
  createdAt,
}: {
  title: string;
  content: string;
  createdAt: string;
}) {
  return (
    <article className="relative flex w-[min(80vw,_40rem)] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-slate-400 bg-darker p-6 pb-12 md:gap-4 md:p-10">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p>{content}</p>
      <span className="absolute bottom-2 right-4 text-sm font-thin">
        {createdAt}
      </span>
    </article>
  );
}

export default async function Articles() {
  const articles = await getArticles();

  return articles ? (
    articles.map((article) => {
      return (
        <Link href={`/articles/${article.id}`}>
          <Article
            title={article.title}
            content={article.content}
            createdAt={article.created}
          />
        </Link>
      );
    })
  ) : (
    <div>There are no articles</div>
  );
}
