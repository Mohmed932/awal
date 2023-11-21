// import Sections from "@/components/Sections/Sections";
// import SectionsViews from "@/components/Sections/SectionsViews";
import Miscellaneous from "@/components/Miscellaneous";

const careers = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/careers?page=1&limit=10", {
      next: {
        revalidate: 60,
      },
    }
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/careers/views"
  );
  const resViews = await reqViews.json();
  const kind ="وظائف"
  const partOfUrl = "careers"
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      partOfUrl={partOfUrl}
      NewsMiscellaneous={resViews}
    />
  );
};

export default careers;
