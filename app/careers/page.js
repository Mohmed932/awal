import React from "react";
import Miscellaneous from "@/components/Miscellaneous";

export const metadata = {
  title: `أخبار الوظائف والتوظيف - تحديثات حصرية عن العمل والفرص الوظيفيةالمحلية والعالمية`,
  description:
    "اول باول موقع أخباري متخصص في الوظائف والتوظيف. نقدم آخر الأخبار والمقالات والتحليلات حول عالم العمل",
  metadataBase: new URL("https://www.awalbawl.online"),
  icons: {
    icon: "https://www.awalbawl.online/ios/16.png",
    shortcut: "https://www.awalbawl.online/ios/16.png",
    apple: "https://www.awalbawl.online/ios/16.png",
  },
  title: `أخبار الوظائف والتوظيف - تحديثات حصرية عن العمل والفرص الوظيفية المحلية والعالمية`,
  description:
    "اول باول موقع أخباري متخصص في الوظائف والتوظيف. نقدم آخر الأخبار والمقالات والتحليلات حول عالم العمل",
  canonical: `https://www.awalbawl.online/careers`,
  openGraph: {
    title: `أخبار الوظائف والتوظيف - تحديثات حصرية عن العمل والفرص الوظيفية المحلية والعالمية`,
    description:
      "اول باول موقع أخباري متخصص في الوظائف والتوظيف. نقدم آخر الأخبار والمقالات والتحليلات حول عالم العمل",
    siteName: "اول بأول",
    type: "website",
  },
};

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
