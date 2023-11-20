"use client"
import Link from "next/link";
import "../app/styles/NewsTicker.css";
import { memo, useContext } from "react";
import { DataContext } from "@/app/context";
const NewsTicker = memo(({ last }) => {
  const { isDarkMode} = useContext(DataContext);
  return (
    <div className="ticker">
      <ul className="newsList">
        {last.slice(0, 7).map(({ title, _id }) => (
          <Link key={_id} className="newsItem" href={`/news/${_id}`}>
            {title}
          </Link>
        ))}
      </ul>
    </div>
  );
});

export default NewsTicker;
