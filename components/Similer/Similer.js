"use client";
import "@/app/styles/news.css";
import { DataContext } from "@/app/context";
import React, { useContext, useEffect } from "react";
import Link from "next/link";
import SimilerLoading from "../Loading/SimilerLoading";

const Similer = ({ id }) => {
  const { dispatch, state,isDarkMode } = useContext(DataContext);
  const SimilerDataFetching = async () => {
    try {
      dispatch({ type: "LOADING", payload: null });
      const req = await fetch(
        `https://serverawalbawl.vercel.app/news/similer/${id}`
      );
      const res = await req.json();
      dispatch({ type: "LOADED", payload: res });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  };
  useEffect(() => {
    SimilerDataFetching();
  }, [id]);
  return (
    <div className="Similer_news">
      {state.status === "loading" ? (
        <SimilerLoading />
      ) : (
        <div className="Main_Similer_news">
          <h3>اخبار متعلقة</h3>
          <div className="main_container_Similer">
            {state.data.map(({ _id, title, more_details: { largeImage } }) => (
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Similer;
