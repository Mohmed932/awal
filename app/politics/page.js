import Miscellaneous from "@/components/Miscellaneous";

const politics = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/politics?page=1&limit=10"
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/politics/views"
  );
  const resViews = await reqViews.json();
  const kind = "سياسه"
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      NewsMiscellaneous={resViews}
    />
  );
};

export default politics;
