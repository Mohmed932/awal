import Miscellaneous from "@/components/Miscellaneous";

export const metadata = {
  title: ` أخبار الرياضة المحلية والعالمية - تحديثات حصرية عن أحدث الأخبار والأحداث الرياضية`,
  description:
    "موقع أخباري متخصص في تغطية أحدث الأخبار والأحداث الرياضية المحلية والعالمية. نقدم آخر التحديثات",
  metadataBase: new URL("https://www.awalbawl.online"),
  icons: {
    icon: "../16.png",
    shortcut: "../16.png",
    apple: "../16.png",
  },
  title: ` أخبار الرياضة المحلية والعالمية - تحديثات حصرية عن أحدث الأخبار والأحداث الرياضية`,
  description:
    "موقع أخباري متخصص في تغطية أحدث الأخبار والأحداث الرياضية المحلية والعالمية. نقدم آخر التحديثات",
  canonical: `https://www.awalbawl.online/sports`,
  openGraph: {
    title: ` أخبار الرياضة المحلية والعالمية - تحديثات حصرية عن أحدث الأخبار والأحداث الرياضية`,
    description:
      "موقع أخباري متخصص في تغطية أحدث الأخبار والأحداث الرياضية المحلية والعالمية. نقدم آخر التحديثات",
    siteName: "اول بأول",
    type: "website",
  },
};

const sports = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/sports?page=1&limit=10",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/sports/views"
  );
  const resViews = await reqViews.json();
  const kind = "رياضه";
  const partOfUrl = "sports";
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      NewsMiscellaneous={resViews}
      partOfUrl={partOfUrl}
    />
  );
};

export default sports;
