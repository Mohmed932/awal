import React from "react";
import Miscellaneous from "@/components/Miscellaneous";

const careers = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/career?page=1&limit=10",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/career/views"
  );
  const resViews = await reqViews.json();
  const kind = "وظائف";
  const partOfUrl = "career";
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
