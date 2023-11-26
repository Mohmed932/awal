import Miscellaneous from "@/components/Miscellaneous";

export const metadata = {
  title: `أخبار التحقيقات والملفات المحلية والعالمية - تحديثات حصرية عن الأخبار الحالية والتحقيقات الدقيقة`,
  description:
    "موقع أخباري متخصص في التحقيقات والملفات المحلية والعالمية. نقدم آخر الأخبار والمقالات والتحليلات",
  metadataBase: new URL("https://www.awalbawl.online"),
  icons: {
    icon: "../16.png",
    shortcut: "../16.png",
    apple: "../16.png",
  },
  title: `أخبار التحقيقات والملفات المحلية والعالمية - تحديثات حصرية عن الأخبار الحالية والتحقيقات الدقيقة`,
  description:
    "موقع أخباري متخصص في التحقيقات والملفات المحلية والعالمية. نقدم آخر الأخبار والمقالات والتحليلات",
  canonical: `https://www.awalbawl.online/investigations`,
  openGraph: {
    title: `أخبار التحقيقات والملفات المحلية والعالمية - تحديثات حصرية عن الأخبار الحالية والتحقيقات الدقيقة`,
    description:
      "موقع أخباري متخصص في التحقيقات والملفات المحلية والعالمية. نقدم آخر الأخبار والمقالات والتحليلات",
    siteName: "اول بأول",
    type: "website",
  },
};

const investigations = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/investigations?page=1&limit=10",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/investigations/views"
  );
  const resViews = await reqViews.json();
  const kind = "تحقيقات";
  const partOfUrl = "investigations";
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      partOfUrl={partOfUrl}
      NewsMiscellaneous={resViews}
    />
  );
};

export default investigations;
