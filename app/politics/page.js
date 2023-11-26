import Miscellaneous from "@/components/Miscellaneous";

export const metadata = {
  title: `أخبار السياسة المحلية والعالمية - تحديثات حصرية عن أحدث التطورات السياسية في الدول العربية وحول العالم`,
  description:
    "موقع أخباري متخصص في السياسة والتطورات السياسية في الدول العربية وحول العالم. نقدم آخر الأخبار",
  metadataBase: new URL("https://www.awalbawl.online"),
  icons: {
    icon: "../16.png",
    shortcut: "../16.png",
    apple: "../16.png",
  },
  title: `أخبار السياسة المحلية والعالمية - تحديثات حصرية عن أحدث التطورات السياسية في الدول العربية وحول العالم`,
  description:
    "موقع أخباري متخصص في السياسة والتطورات السياسية في الدول العربية وحول العالم. نقدم آخر الأخبار",
  canonical: `https://www.awalbawl.online/politics`,
  openGraph: {
    title: `أخبار السياسة المحلية والعالمية - تحديثات حصرية عن أحدث التطورات السياسية في الدول العربية وحول العالم`,
    description:
      "موقع أخباري متخصص في السياسة والتطورات السياسية في الدول العربية وحول العالم. نقدم آخر الأخبار",
    siteName: "اول بأول",
    type: "website",
  },
};

const politics = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/politics?page=1&limit=10",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/politics/views"
  );
  const resViews = await reqViews.json();
  const kind = "سياسه";
  const partOfUrl = "politics";
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      partOfUrl={partOfUrl}
      NewsMiscellaneous={resViews}
    />
  );
};

export default politics;
