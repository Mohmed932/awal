import Miscellaneous from "@/components/Miscellaneous";

export const metadata = {
  title: `أخبار الثقافة المحلية والعالمية - تحديثات حصرية عن الفنانين المشهورين وأحدث أفلامهم`,
  description:
    "موقع أخباري متخصص في الثقافة المحلية والعالمية. نقدم آخر الأخبار والمقالات والتحليلات حول عالم الفن",
  metadataBase: new URL("https://www.awalbawl.online"),
  icons: {
    icon: "https://www.awalbawl.online/ios/16.png",
    shortcut: "https://www.awalbawl.online/ios/16.png",
    apple: "https://www.awalbawl.online/ios/16.png",
  },
  title: `أخبار الثقافة المحلية والعالمية - تحديثات حصرية عن الفنانين المشهورين  وأحدث أفلامهم`,
  description:
    "موقع أخباري متخصص في الثقافة المحلية والعالمية. نقدم آخر الأخبار والمقالات والتحليلات حول عالم الفن",
  canonical: `https://www.awalbawl.online/culture`,
  openGraph: {
    title: `أخبار الثقافة المحلية والعالمية - تحديثات حصرية عن الفنانين المشهورين وأحدث أفلامهم`,
    description:
      "موقع أخباري متخصص في الثقافة المحلية والعالمية. نقدم آخر الأخبار والمقالات والتحليلات حول عالم الفن",
    siteName: "اول بأول",
    type: "website",
  },
};

const culture = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/culture?page=1&limit=10",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/culture/views"
  );
  const resViews = await reqViews.json();
  const kind = "ثقافه";
  const partOfUrl = "culture";
  return (
    <Miscellaneous
      News={res.newsData}
      NewsMiscellaneous={resViews}
      kind={kind}
      partOfUrl={partOfUrl}
    />
  );
};

export default culture;
