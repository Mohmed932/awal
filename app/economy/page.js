import Miscellaneous from "@/components/Miscellaneous";

export const metadata = {
  title: `أخبار الاقتصاد المحلي والعالمي - تحديثات حصرية عن التطورات الاقتصادية والأخبار المالية`,
  description:
    "موقع أخباري متخصص في الاقتصاد والأخبار المالية. نقدم آخر التحديثات والمقالات والتحليلات حول الاقتصاد",
  metadataBase: new URL("https://www.awalbawl.online"),
  icons: {
    icon: "https://www.awalbawl.online/ios/16.png",
    shortcut: "https://www.awalbawl.online/ios/16.png",
    apple: "https://www.awalbawl.online/ios/16.png",
  },
  title: `أخبار الاقتصاد المحلي والعالمي - تحديثات حصرية عن التطورات الاقتصادية والأخبار المالية`,
  description:
    "موقع أخباري متخصص في الاقتصاد والأخبار المالية. نقدم آخر التحديثات والمقالات والتحليلات حول الاقتصاد",
  canonical: `https://www.awalbawl.online/economy`,
  openGraph: {
    title: `أخبار الاقتصاد المحلي والعالمي - تحديثات حصرية عن التطورات الاقتصادية والأخبار المالية`,
    description:
      "موقع أخباري متخصص في الاقتصاد والأخبار المالية. نقدم آخر التحديثات والمقالات والتحليلات حول الاقتصاد",
    siteName: "اول بأول",
    type: "website",
  },
};

const economy = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/economy?page=1&limit=10",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/economy/views"
  );
  const resViews = await reqViews.json();
  const kind = "اقتصاد";
  const partOfUrl = "economy";
  return (
    <Miscellaneous
      News={res.newsData}
      NewsMiscellaneous={resViews}
      kind={kind}
      partOfUrl={partOfUrl}
    />
  );
};

export default economy;
