import Miscellaneous from "@/components/Miscellaneous";

export const metadata = {
  title: `أخبار الصحة المحلية والعالمية - تحديثات حصرية عن أحدث المستجدات والأبحاث الطبية`,
  description:
    "الصحة,المحلية,العالمية,أخبار الصحة المحلية والعالمية,تحديثات الصحة,أحدث الأبحاث الطبية,مقالات عن الصحة والعافية,تحليلات الأمراض,أخبار الصحة في الوطن العربي,المشاكل الصحية الحالية,نصائح الصحة,تحديثات المستجدات الصحية",
  metadataBase: new URL("https://www.awalbawl.online"),
  icons: {
    icon: "../16.png",
    shortcut: "../16.png",
    apple: "../16.png",
  },
  title: `أخبار الصحة المحلية والعالمية - تحديثات حصرية عن أحدث المستجدات والأبحاث الطبية`,
  description:
    "الصحة,المحلية,العالمية,أخبار الصحة المحلية والعالمية,تحديثات الصحة,أحدث الأبحاث الطبية,مقالات عن الصحة والعافية,تحليلات الأمراض,أخبار الصحة في الوطن العربي,المشاكل الصحية الحالية,نصائح الصحة,تحديثات المستجدات الصحية",
  canonical: `https://www.awalbawl.online/health`,
  openGraph: {
    title: `أخبار الصحة المحلية والعالمية - تحديثات حصرية عن أحدث المستجدات والأبحاث الطبية`,
    description:
      "الصحة,المحلية,العالمية,أخبار الصحة المحلية والعالمية,تحديثات الصحة,أحدث الأبحاث الطبية,مقالات عن الصحة والعافية,تحليلات الأمراض,أخبار الصحة في الوطن العربي,المشاكل الصحية الحالية,نصائح الصحة,تحديثات المستجدات الصحية",
    siteName: "اول بأول",
    type: "website",
  },
};

const health = async () => {
  const req = await fetch(
    "https://serverawalbawl.vercel.app/news/health?page=1&limit=10",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const res = await req.json();
  const reqViews = await fetch(
    "https://serverawalbawl.vercel.app/news/health/views"
  );
  const resViews = await reqViews.json();
  const kind = "صحه";
  const partOfUrl = "health";
  return (
    <Miscellaneous
      News={res.newsData}
      kind={kind}
      partOfUrl={partOfUrl}
      NewsMiscellaneous={resViews}
    />
  );
};

export default health;
