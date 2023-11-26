import Miscellaneous from "@/components/Miscellaneous";

export const metadata = {
  title: "أخبار الفن والسينما - تحديثات حصرية عن فنانين مشهورين وأحدث أفلامهم",
  description:
    "اول باول موقع أخباري متخصص في الفن والفنانين والسينما. نقدم آخر الأخبار والمقالات والتحليلات حول عالم",
  metadataBase: new URL("https://www.awalbawl.online"),
  icons: {
    icon: "../16.png",
    shortcut: "../16.png",
    apple: "../16.png",
  },
  title: "أخبار الفن والسينما - تحديثات حصرية عن فنانين مشهورين وأحدث أفلامهم",
  description:
    "اول باول موقع أخباري متخصص في الفن والفنانين والسينما. نقدم آخر الأخبار والمقالات والتحليلات حول عالم",
  canonical: `https://www.awalbawl.online/art`,
  openGraph: {
    title:
      "أخبار الفن والسينما - تحديثات حصرية عن فنانين مشهورين وأحدث أفلامهم",
    description:
      "اول باول موقع أخباري متخصص في الفن والفنانين والسينما. نقدم آخر الأخبار والمقالات والتحليلات حول عالم",
    siteName: "اول بأول",
    type: "website",
  },
};

const art = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/art?page=1&limit=10",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/art/views"
  );
  const resViews = await reqViews.json();
  const kind = "فن";
  const partOfUrl = "art";
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      partOfUrl={partOfUrl}
      NewsMiscellaneous={resViews}
    />
  );
};

export default art;
