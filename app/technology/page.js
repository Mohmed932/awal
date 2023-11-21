import Miscellaneous from "@/components/Miscellaneous";

const technology = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/technology?page=1&limit=10"
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/technology/views"
  );
  const resViews = await reqViews.json();
  const kind = "تكنولوجيا"
  const partOfUrl = "technology"
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      NewsMiscellaneous={resViews}
      partOfUrl={partOfUrl}
    />
  );
};

export default technology;
