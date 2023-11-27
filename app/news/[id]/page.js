import "@/app/styles/news.css";
import Similer from "@/components/Similer/Similer";
import Scoial from "@/components/scoial";

export const generateMetadata = async ({ params }) => {
  const id = params.id;
  const req = await fetch(`https://serverawalbawl.vercel.app/news/${id}`);
  const res = await req.json();
  return {
    metadataBase: new URL("https://www.awalbawl.online"),
    title: res.title,
    description: res.more_details.one,
    themeColor: "black",
    canonical: `https://www.awalbawl.online/news/${id}`,
    icons: {
      icon: "./icon.png",
      shortcut: "./icon.png",
      apple: "./icon.png",
    },
    openGraph: {
      title: res.title,
      description: res.more_details.one,
      siteName: "اول بأول",
      images: res.more_details.largeImage,
      type: "article",
    },
  };
};
const page = async ({ params }) => {
  const req = await fetch(
    `https://serverawalbawl.vercel.app/news/${params.id}`
  );
  const res = await req.json();
  return (
    <div className="Single_news">
      <div className="Single_news_Similer">
        <Similer id={params.id} />
      </div>
      <div className="Single_News_Main">
        <h1 className="Single_news_text">{res.title}</h1>
        <span className="Single_news_kind">{res.kind}</span>
        <span>{res.more_details.date}</span>
        <div className="img_loading">
          <img
            src={res.more_details.largeImage}
            alt={res.title || "اول باول"}
            loading="lazy"
            width={100}
            height={100}
          />
        </div>
        <button
          className="Single_share"
          name="مشاركه الخبر"
          aria-label="مشاركه الخبر"
        >
          <Scoial res={res} params={params} />
        </button>
        <p>{res.more_details.one}</p>
        <p>{res.more_details.two}</p>
        <p>{res.more_details.three}</p>
        <p>{res.more_details.four}</p>
        <p>{res.more_details.five}</p>
        <p>{res.more_details.six}</p>
        <p>{res.more_details.seven}</p>
        <p>{res.more_details.eight}</p>
        <p>{res.more_details.nine}</p>
        <p>{res.more_details.ten}</p>
        <p>{res.more_details.eleven}</p>
        <p>{res.more_details.twelve}</p>
        <p>{res.more_details.thirteen}</p>
        <p>{res.more_details.fourteen}</p>
        <p>{res.more_details.fifteen}</p>
        <p>{res.more_details.sixteen}</p>
        <p>{res.more_details.seventeen}</p>
        <p>{res.more_details.eighteen}</p>
        <p>{res.more_details.nineteen}</p>
        <p>{res.more_details.twenty}</p>
      </div>
    </div>
  );
};

export default page;
