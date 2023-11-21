import Miscellaneous from "@/components/Miscellaneous";

const health = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/health?page=1&limit=10"
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/health/views"
  );
  const resViews = await reqViews.json();
  const kind ="صحه"
  const partOfUrl = "health"
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      partOfUrl={partOfUrl}
      NewsMiscellaneous={resViews}
    />
  );
};

export default health;
