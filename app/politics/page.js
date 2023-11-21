import Miscellaneous from "@/components/Miscellaneous";

const politics = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/politics?page=1&limit=10", {
      next: {
        revalidate: 60,
      },
    }
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/politics/views"
  );
  const resViews = await reqViews.json();
  const kind = "سياسه"
  const partOfUrl = "politics"
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      partOfUrl={partOfUrl}
      NewsMiscellaneous={resViews}
    />
  );
};

export default politics;
