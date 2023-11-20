import Miscellaneous from "@/components/Miscellaneous";

const art = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/art?page=1&limit=10"
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/art/views"
  );
  const resViews = await reqViews.json();
  const kind = "فن"
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      NewsMiscellaneous={resViews}
    />
  );
};

export default art;
