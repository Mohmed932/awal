"use client";
import React, { memo, useContext } from "react";
import { useEffect } from "react";
import MainSections from "./MainSections";
import { DataContext } from "@/app/context";

const SportsSections = memo(() => {
  const { stateSports, dispatchSports } = useContext(DataContext);
  const handelData = async () => {
    try {
      dispatchSports({ type: "LOADING", payload: null });
      const req = await fetch(
        "https://serverawalbawl.vercel.app/news/sports?page=1&limit=10"
      );
      const res = await req.json();
      dispatchSports({ type: "LOADED", payload: res });
    } catch (error) {
      dispatchSports({ type: "ERROR", payload: error.message });
    }
  };
  useEffect(() => {
    handelData();
  }, []);
  const name = "رياضه";
  const link = "sports";
  return (
    <MainSections
      NewsSection={stateSports.data}
      loading={stateSports.status}
      name={name}
      link={link}
    />
  );
});

export default SportsSections;
