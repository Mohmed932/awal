import Miscellaneous from "@/components/Miscellaneous";

const events = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/events?page=1&limit=10"
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/events/views"
  );
  const resViews = await reqViews.json();
  const kind = "احداث"
  const partOfUrl = "events"
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      partOfUrl={partOfUrl}
      NewsMiscellaneous={resViews}
    />
  );
};

export default events;
