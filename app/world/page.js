import Miscellaneous from "@/components/Miscellaneous";

const world = async () => {
  const req = await fetch(
    `https://serverawalbawl.vercel.app/news/world?page=1&limit=10`, {
      next: {
        revalidate: 60,
      },
    }
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/world/views"
  );
  const resViews = await reqViews.json();
  const kind = "اخبار العالم والعرب";
  const partOfUrl = "world"
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      NewsMiscellaneous={resViews}
      partOfUrl= {partOfUrl}
    />
  );
};

export default world;
