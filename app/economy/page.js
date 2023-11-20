import Miscellaneous from "@/components/Miscellaneous";

const economy = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/economy?page=1&limit=10"
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/economy/views"
  );
  const resViews = await reqViews.json();
  const kind = "اقتصاد"
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      NewsMiscellaneous={resViews}
    />
  );
};

export default economy;
