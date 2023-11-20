import Miscellaneous from "@/components/Miscellaneous";

const Word = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/world?page=1&limit=10"
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/world/views"
  );
  const resViews = await reqViews.json();
  const kind = "اخبار العالم والعرب";
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      NewsMiscellaneous={resViews}
    />
  );
};

export default Word;
