import React from "react";
import Article from "./Article";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

interface Article {
  title: string;
  content: string;
}

export default async function Articles() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: articles } = await supabase.from("article").select();

  return articles ? (
    articles.map((article) => {
      return <Article title={article.title} content={article.content} />;
    })
  ) : (
    <div>There are no articles</div>
  );
}
