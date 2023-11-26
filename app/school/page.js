import Miscellaneous from "@/components/Miscellaneous";

export const metadata = {
  title: `أخبار التعليم المحلية والعالمية - تحديثات حصرية حول أحدث الأخبار والتطورات في عالم التعليم`,
  description:
    "موقع أخباري متخصص في التعليم والتعليم العالمي. نقدم آخر الأخبار والمقالات والتحليلات حول عالم التعليم",
  metadataBase: new URL("https://www.awalbawl.online"),
  icons: {
    icon: "../16.png",
    shortcut: "../16.png",
    apple: "../16.png",
  },
  title: `أخبار التعليم المحلية والعالمية - تحديثات حصرية حول أحدث الأخبار والتطورات في عالم التعليم`,
  description:
    "موقع أخباري متخصص في التعليم والتعليم العالمي. نقدم آخر الأخبار والمقالات والتحليلات حول عالم التعليم",
  canonical: `https://www.awalbawl.online/school`,
  openGraph: {
    title: `أخبار التعليم المحلية والعالمية - تحديثات حصرية حول أحدث الأخبار والتطورات في عالم التعليم`,
    description:
      "موقع أخباري متخصص في التعليم والتعليم العالمي. نقدم آخر الأخبار والمقالات والتحليلات حول عالم التعليم",
    siteName: "اول بأول",
    type: "website",
  },
};

const school = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/school?page=1&limit=10",
    {
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
  const kind = "تعليم";
  const partOfUrl = "school";
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
