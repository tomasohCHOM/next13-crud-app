import Articles from "@/components/Article";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchData = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

export default async function Index() {
  return (
    <section className="mt-10 flex flex-col gap-5">
      <Articles />
    </section>
  );
}
