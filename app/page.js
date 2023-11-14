import MostRead from "@/components/MostRead";
import NewsTicker from "@/components/NewsTicker";
import SliderLatest from "@/components/SliderLatest";

export const metadata = {
  title: "أول بأول- ناقل اخباري",
  description:
    "موقع اول باول الاخباري يقدم احدث واهم اخبار مصر على مدار اليوم كما نقدم اهم اخبار الرياضة والفن والاقتصاد والحوادث",
    icons: {
      icon:[{url:'/public/ios/16.png'}, new URL('/public/ios/16.png', 'http://localhost:3000')],
    },
  metadataBase: new URL("https://www.awalbawl.online"),
  title: "أول بأول- ناقل اخباري",
  description:
    "موقع اول باول الاخباري يقدم احدث واهم اخبار مصر على مدار اليوم كما نقدم اهم اخبار الرياضة والفن والاقتصاد والحوادث",
  themeColor: "black",
  canonical: `https://www.awalbawl.online/`,
  openGraph: {
    title: "أول بأول- ناقل اخباري",
    description:
      "موقع اول باول الاخباري يقدم احدث واهم اخبار مصر على مدار اليوم كما نقدم اهم اخبار الرياضة والفن والاقتصاد والحوادث",
    siteName: "اول بأول",
    type: "website",
  },
};

const page = async () => {
  const req = await fetch("https://serverawalbawl.vercel.app/news/last", {
    next: {
      revalidate: 60,
    },
  });
  const last = await req.json();
  return (
    <div>
      <NewsTicker last={last} />
      <SliderLatest last={last} />
      <MostRead />
    </div>
  );
};

export default page;
