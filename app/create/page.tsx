import CreateArticle from "@/components/CreateArticle";
import Navbar from "@/components/Navbar";

export default async function Index() {
  return (
    <div className="flex flex-col items-center flex-1 w-full gap-20">
      <Navbar />
      <CreateArticle />
    </div>
  );
}
