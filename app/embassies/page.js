import Miscellaneous from "@/components/Miscellaneous";

const embassies = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/embassies?page=1&limit=10"
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/embassies/views"
  );
  const resViews = await reqViews.json();
  const kind = "سفارات"
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      NewsMiscellaneous={resViews}
    />
  );
};

export default embassies;
