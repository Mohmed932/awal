import React, { useCallback } from "react";
import "@/app/styles/Sections.css";
import Link from "next/link";
import LoadingOne from "./Loading/LoadingOne";

const MainSections = ({ NewsSection, loading, name, link }) => {
  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const renderItem = useCallback(
    ({ _id, title, more_details }) => {
      const { date, largeImage } = more_details;
      return (
        <Link
          href={`/news/${_id}`}
          className="Sections_eachItem"
          key={_id}
          onClick={handleClick}
          title={title}
          aria-label={title}
        >
          <div className="Sections_eachItem_image">
            <img src={largeImage} alt={title} loading="lazy" />
          </div>
          <div className="Sections_items_word">
            <span>{date}</span>
            <h3>
              {title.slice(0, 50)}..
              <span style={{ fontSize: "15px" }}>قراءه المزيد</span>
            </h3>
          </div>
        </Link>
      );
    },
    [handleClick]
  );
  return (
    <section className="Sections">
      <div className="Sections_word Sections_word_economy">
        <h3>{name}</h3>
      </div>
      <div className="Sections_items">
        {loading === "loading" ? (
          <LoadingOne />
        ) : (
          NewsSection?.newsData.slice(3, 6).map(renderItem)
        )}
      </div>
      <div className="Sections_items_link">
        <Link href={link}>وريني اكتر</Link>
      </div>
    </section>
  );
};
export default MainSections;
