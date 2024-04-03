import Articles from "@/components/Article";

export default async function Index() {
  return (
    <section className="mt-10 flex flex-col gap-5">
      <Articles />
    </section>
  );
}
