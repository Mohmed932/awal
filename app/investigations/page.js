import Miscellaneous from "@/components/Miscellaneous";

const investigations = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/investigations?page=1&limit=10"
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/investigations/views"
  );
  const resViews = await reqViews.json();
  const kind = "تحقيقات"
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      NewsMiscellaneous={resViews}
    />
  );
};

export default investigations;
