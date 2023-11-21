import Miscellaneous from "@/components/Miscellaneous";

const school = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/school?page=1&limit=10", {
      next: {
        revalidate: 60,
      },
    }
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/school/views"
  );
  const resViews = await reqViews.json();
  const kind = "تعليم"
  const partOfUrl = "school"
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      partOfUrl={partOfUrl}
      NewsMiscellaneous={resViews}
    />
  );
};

export default school;
