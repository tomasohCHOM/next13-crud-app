import CreateArticle from "@/components/CreateArticle";

export default async function Index() {
  return (
    <div className="flex w-full flex-1 flex-col items-center gap-20">
      <CreateArticle />
    </div>
  );
}
