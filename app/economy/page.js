import Miscellaneous from "@/components/Miscellaneous";

const economy = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/economy?page=1&limit=10", {
      next: {
        revalidate: 60,
      },
    }
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/economy/views"
  );
  const resViews = await reqViews.json();
  const kind = "اقتصاد"
  const partOfUrl = "economy"
  return (
    <Miscellaneous
      News={res.newsData}
      NewsMiscellaneous={resViews}
      kind={kind}
      partOfUrl={partOfUrl}
    />
  );
};

export default economy;
