import Miscellaneous from "@/components/Miscellaneous";

const investigations = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/investigations?page=1&limit=10", {
      next: {
        revalidate: 60,
      },
    }
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/investigations/views"
  );
  const resViews = await reqViews.json();
  const kind = "تحقيقات"
  const partOfUrl = "investigations"
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      partOfUrl={partOfUrl}
      NewsMiscellaneous={resViews}
    />
  );
};

export default investigations;
