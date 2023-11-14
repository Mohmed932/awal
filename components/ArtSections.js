"use client";
import React, { memo, useContext } from "react";
import { useEffect } from "react";
import MainSections from "./MainSections";
import { DataContext } from "@/app/context";

const ArtSections = memo(() => {
  const { stateArt, dispatchArt } = useContext(DataContext);
  const handelData = async () => {
    try {
      dispatchArt({ type: "LOADING", payload: null });
      const reqArt = await fetch(
        "https://serverawalbawl.vercel.app/news/art?page=1&limit=10"
      );
      const resArt = await reqArt.json();
      dispatchArt({ type: "LOADED", payload: resArt });
    } catch (error) {
      dispatchArt({ type: "ERROR", payload: error.message });
    }
  };
  const name = "فن";
  const link = "art";
  useEffect(() => {
    handelData();
  }, []);
  return (
    <MainSections
      NewsSection={stateArt.data}
      loading={stateArt.status}
      name={name}
      link={link}
    />
  );
});

export default ArtSections;
