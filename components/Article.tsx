import React from "react";

interface Article {
  title: string;
  content: string;
}

function Article(props: Article) {
  return (
    <article className="flex w-[min(80vw,_40rem)] flex-col items-center justify-center gap-4 rounded-2xl border-2 border-contrast bg-darker p-6 md:p-10">
      <h3 className="text-2xl font-semibold">{props.title}</h3>
      <p>{props.content}</p>
    </article>
  );
}

export default async function Articles() {
  let articles: Article[] = [
    { title: "Hello World", content: "This is my first article" },
  ];
  // const { data: articles } = await supabase.from("article").select();

  return articles ? (
    articles.map((article) => {
      return <Article title={article.title} content={article.content} />;
    })
  ) : (
    <div>There are no articles</div>
  );
}
