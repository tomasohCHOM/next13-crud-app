import Navbar from "@/components/Navbar";
import Articles from "@/components/Article";

export default async function Index() {
  return (
    <div className="flex w-full flex-1 flex-col items-center">
      <Navbar />

      <main className="mt-10 flex flex-col gap-5">
        <Articles />
      </main>
    </div>
  );
}
