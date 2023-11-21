"use client";
import Link from "next/link";
import "@/app/styles/Miscellaneous.css";
import { useContext, useState } from "react";
import SimpleSlider from "./Views";
import { DataContext } from "@/app/context";

const Miscellaneous = ({ News, kind, NewsMiscellaneous, partOfUrl }) => {
  const { isDarkMode } = useContext(DataContext);
  const [count, setcount] = useState(2);
  const [loading, setloading] = useState(false);
  const [data, setData] = useState(News || []);
  const addCount = async () => {
    try {
      setloading(true);
      setcount(count + 1);
      const req = await fetch(
        `https://serverawalbawl.vercel.app/news/${partOfUrl}?page=${count}&limit=10`
      );
      const res = await req.json();
      setData([...data, ...res.newsData]);
      setloading(false);
    } catch (error) {
      if (error) throw error;
      setloading(false);
    }
  };
  return (
    <div
      className={isDarkMode ? "AllMiscellaneous dark-mode" : "AllMiscellaneous"}
    >
      <div className="AllMiscellaneous_container">
        <div className="AllMiscellaneous_left">
          <div className="AllMiscellaneous_left_line">
            <h1>{kind}</h1>
          </div>
          <div className="AllMiscellaneous_items">
            {News &&
              data.map(
                ({ _id, title, more_details: { date, largeImage } }, idx) => (
                  <div className="AllMiscellaneous_item" key={idx}>
                    <div className="AllMiscellaneous_item_img">
                      <img src={largeImage} alt={title} loading="lazy" />
                    </div>
                    <Link
                      href={`/news/${_id}`}
                      onClick={() => window.scrollTo({ top: "0" })}
                    >
                      <h1>{title}</h1>
                    </Link>
                    <span>{date}</span>
                  </div>
                )
              )}
          </div>
          <div className="AllMiscellaneous_pagnation">
            <button onClick={addCount}>
              {loading ? "... جار التحميل" : "تحميل المزيد"}
            </button>
          </div>
        </div>
        <div className="AllMiscellaneous_rifht">
          <div className="AllMiscellaneous_views">
            <div className="AllMiscellaneous_views_word">
              <h1>زوار بشاهدون الان</h1>
            </div>
            <SimpleSlider NewsMiscellaneous={NewsMiscellaneous} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Miscellaneous;
