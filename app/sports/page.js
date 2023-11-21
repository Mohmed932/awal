import Miscellaneous from "@/components/Miscellaneous";

const sports = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/sports?page=1&limit=10", {
      next: {
        revalidate: 60,
      },
    }
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/sports/views"
  );
  const resViews = await reqViews.json();
  const kind = "رياضه"
  const partOfUrl = "sports"
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      NewsMiscellaneous={resViews}
      partOfUrl={partOfUrl}
    />
  );
};

export default sports;
