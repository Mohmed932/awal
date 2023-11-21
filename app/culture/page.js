import Miscellaneous from "@/components/Miscellaneous";

const culture = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/culture?page=1&limit=10"
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/culture/views"
  );
  const resViews = await reqViews.json();
  const kind = "ثقافه"
  const partOfUrl = "culture"
  return (
    <Miscellaneous
      News={res.newsData}
      NewsMiscellaneous={resViews}
      kind={kind}
      partOfUrl={partOfUrl}
    />
  );
};

export default culture;
