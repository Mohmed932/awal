import Miscellaneous from "@/components/Miscellaneous";

export const metadata = {
  title: `أخبار التكنولوجيا - تحديثات حصرية عن أحدث التقنيات والابتكارات`,
  description:
    "موقع أخباري متخصص في مجال التكنولوجيا. نقدم آخر الأخبار والمقالات والتحليلات حول عالم التقنية التكنولوجيا",
  metadataBase: new URL("https://www.awalbawl.online"),
  icons: {
    icon: "https://www.awalbawl.online/ios/16.png",
    shortcut: "https://www.awalbawl.online/ios/16.png",
    apple: "https://www.awalbawl.online/ios/16.png",
  },
  title: `أخبار التكنولوجيا - تحديثات حصرية عن أحدث التقنيات والابتكارات`,
  description:
    "موقع أخباري متخصص في مجال التكنولوجيا. نقدم آخر الأخبار والمقالات والتحليلات حول عالم التقنية التكنولوجيا",
  canonical: `https://www.awalbawl.online/technology`,
  openGraph: {
    title: `أخبار التكنولوجيا - تحديثات حصرية عن أحدث التقنيات والابتكارات`,
    description:
      "موقع أخباري متخصص في مجال التكنولوجيا. نقدم آخر الأخبار والمقالات والتحليلات حول عالم التقنية التكنولوجيا",
    siteName: "اول بأول",
    type: "website",
  },
};

const technology = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/technology?page=1&limit=10",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/technology/views"
  );
  const resViews = await reqViews.json();
  const kind = "تكنولوجيا";
  const partOfUrl = "technology";
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      NewsMiscellaneous={resViews}
      partOfUrl={partOfUrl}
    />
  );
};

export default technology;
