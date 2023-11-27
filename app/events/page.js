import Miscellaneous from "@/components/Miscellaneous";

export const metadata = {
  title: `أخبار الكوارث والمصائب الطبيعية - تحديثات حصرية عن الأحداث المحلية والعالمية`,
  description:
    "موقع أخباري متخصص في تغطية أحداث الكوارث والمصائب، بما في ذلك الأحداث المحلية والعالمية",
  metadataBase: new URL("https://www.awalbawl.online"),
  icons: {
    icon: "./icon.png",
    shortcut: "./icon.png",
    apple: "./icon.png",
  },
  title: `أخبار الكوارث والمصائب الطبيعية - تحديثات حصرية عن الأحداث المحلية والعالمية`,
  description:
    "موقع أخباري متخصص في تغطية أحداث الكوارث والمصائب، بما في ذلك الأحداث المحلية والعالمية",
  canonical: `https://www.awalbawl.online/events`,
  openGraph: {
    title: `أخبار الكوارث والمصائب الطبيعية - تحديثات حصرية عن الأحداث المحلية والعالمية`,
    description:
      "موقع أخباري متخصص في تغطية أحداث الكوارث والمصائب، بما في ذلك الأحداث المحلية والعالمية",
    siteName: "اول بأول",
    type: "website",
  },
};

const events = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/events?page=1&limit=10",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/events/views"
  );
  const resViews = await reqViews.json();
  const kind = "احداث";
  const partOfUrl = "events";
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      partOfUrl={partOfUrl}
      NewsMiscellaneous={resViews}
    />
  );
};

export default events;
