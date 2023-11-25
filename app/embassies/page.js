import Miscellaneous from "@/components/Miscellaneous";

export const metadata = {
  title: `أخبار السفر والسفارات والخدمات السياحية - تحديثات حصرية عن الوجهات المحلية والعالمية`,
  description:
    "اول باول موقع أخباري متخصص في الوظائف والتوظيف. نقدم آخر الأخبار والمقالات والتحليلات حول عالم العمل",
  metadataBase: new URL("https://www.awalbawl.online"),
  icons: {
    icon: "https://www.awalbawl.online/ios/16.png",
    shortcut: "https://www.awalbawl.online/ios/16.png",
    apple: "https://www.awalbawl.online/ios/16.png",
  },
  title: `أخبار السفر والسفارات والخدمات السياحية - تحديثات حصرية عن الوجهات المحلية والعالمية`,
  description:
    "والسفارات موقع أخباري متخصص في السفر والخدمات السياحية. نقدم آخر الأخبار والمقالات والتحليلات حول عالم",
  canonical: `https://www.awalbawl.online/embassies`,
  openGraph: {
    title: `أخبار السفر والسفارات والخدمات السياحية - تحديثات حصرية عن الوجهات المحلية والعالمية`,
    description:
      "اول باول موقع أخباري متخصص في الوظائف والتوظيف. نقدم آخر الأخبار والمقالات والتحليلات حول عالم العمل",
    siteName: "اول بأول",
    type: "website",
  },
};

const embassies = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/embassies?page=1&limit=10",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/embassies/views"
  );
  const resViews = await reqViews.json();
  const kind = "سفارات";
  const partOfUrl = "embassies";
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      partOfUrl={partOfUrl}
      NewsMiscellaneous={resViews}
    />
  );
};

export default embassies;
