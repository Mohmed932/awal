import Miscellaneous from "@/components/Miscellaneous";

export const metadata = {
  title: `أخبار العالم العربي - تحديثات حصرية عن أحدث الأخبار والأحداث العربية`,
  description:
    "موقع أخباري متخصص في تغطية أحدث الأخبار والأحداث في العالم العربي. نقدم تحديثات حصرية حول أخبار العرب",
  metadataBase: new URL("https://www.awalbawl.online"),
  icons: {
    icon: "https://www.awalbawl.online/ios/16.png",
    shortcut: "https://www.awalbawl.online/ios/16.png",
    apple: "https://www.awalbawl.online/ios/16.png",
  },
  title: `أخبار العالم العربي - تحديثات حصرية عن أحدث الأخبار والأحداث العربية`,
  description:
    "موقع أخباري متخصص في تغطية أحدث الأخبار والأحداث في العالم العربي. نقدم تحديثات حصرية حول أخبار العرب",
  canonical: `https://www.awalbawl.online/world`,
  openGraph: {
    title: `أخبار العالم العربي - تحديثات حصرية عن أحدث الأخبار والأحداث العربية`,
    description:
      "موقع أخباري متخصص في تغطية أحدث الأخبار والأحداث في العالم العربي. نقدم تحديثات حصرية حول أخبار العرب",
    siteName: "اول بأول",
    type: "website",
  },
};

const world = async () => {
  const req = await fetch(
    `https://serverawalbawl.vercel.app/news/world?page=1&limit=10`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/world/views"
  );
  const resViews = await reqViews.json();
  const kind = "اخبار العالم والعرب";
  const partOfUrl = "world";
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      NewsMiscellaneous={resViews}
      partOfUrl={partOfUrl}
    />
  );
};

export default world;
