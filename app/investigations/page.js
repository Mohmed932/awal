"use client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context";

const investigations = () => {
  // const reqinvestigationsViews = await fetch(
  //   "https://serverawalbawl.vercel.app/news/investigations/views"
  // );
  // const resinvestigationsViews = await reqinvestigationsViews.json();
  // console.log(investigationsData);
  return (
    <div>
      {state.data?.map(({ _id, title, more_details: { largeImage } }) => (
        <div className="Similer_news_container" key={_id}>
          <div className="Similer_img_loader">
            <img
              src={largeImage}
              alt={title || "اول باول"}
              loading="lazy"
              width={100}
              height={200}
            />
          </div>
          <Link href={`/news/${_id}`}>
            <span>{title}</span>
          </Link>
        </div>
      ))}
      <button onClick={loadMore}>loadMore</button>
    </div>
  );
};

export default investigations;
