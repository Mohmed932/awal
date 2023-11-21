import Miscellaneous from "@/components/Miscellaneous";

const art = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/art?page=1&limit=10", {
      next: {
        revalidate: 60,
      },
    }
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/art/views"
  );
  const resViews = await reqViews.json();
  const kind = "فن"
  const partOfUrl = "art"
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      partOfUrl={partOfUrl}
      NewsMiscellaneous={resViews}
    />
  );
};

export default art;
