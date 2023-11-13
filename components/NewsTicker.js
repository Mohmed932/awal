import Link from "next/link";
import "../app/styles/NewsTicker.css";
import { memo } from "react";
const NewsTicker = memo(({ last }) => {
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
