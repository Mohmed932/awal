"use client";
import Link from "next/link";
import "../app/styles/SliderLatest.css";
import SimpleSlider from "./SimpleSlider";
const SliderLatest = ({ last }) => {
  return (
    <div className="Slider">
      <div className="Slider_container">
        <div className="last_news">
          <div className="last_news_word">
            <h1>اخر الاخبار</h1>
          </div>
          <div className="last_news_detalies">
            {last.slice(7, 10).map(({ _id, title, more_details, kind }) => (
              <Link href={`/news/${_id}`} className="last_news_items" key={_id}>
                <div className="last_news_items_word">
                  <h2>{title.slice(0, 40)}..قراءه المزيد</h2>
                  <span>{kind}</span>
                </div>
                <div className="last_news_items_image">
                  <img
                    src={more_details.largeImage}
                    alt={title}
                    loading="lazy"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="main_Slider">
          <SimpleSlider last={last} />
        </div>
      </div>
    </div>
  );
};

export default SliderLatest;
