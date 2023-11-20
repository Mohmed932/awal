import Miscellaneous from "@/components/Miscellaneous";

const school = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/school?page=1&limit=10"
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/school/views"
  );
  const resViews = await reqViews.json();
  const kind = "تعليم"
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      NewsMiscellaneous={resViews}
    />
  );
};

export default school;
