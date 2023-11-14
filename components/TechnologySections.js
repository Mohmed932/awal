"use client";
import React, { memo, useContext } from "react";
import { useEffect } from "react";
import MainSections from "./MainSections";
import { DataContext } from "@/app/context";

const TechnologySections = memo(() => {
  const { stateTechnology, dispatchTechnology } = useContext(DataContext);
  const handelData = async () => {
    try {
      dispatchTechnology({ type: "LOADING", payload: null });
      const req = await fetch(
        "https://serverawalbawl.vercel.app/news/technology?page=1&limit=10"
      );
      const res = await req.json();
      dispatchTechnology({ type: "LOADED", payload: res });
    } catch (error) {
      dispatchTechnology({ type: "ERROR", payload: error.message });
    }
  };
  useEffect(() => {
    handelData();
  }, []);
  const name = "تكنولوجيا";
  const link = "technology";
  return (
    <MainSections
      NewsSection={stateTechnology.data}
      loading={stateTechnology.status}
      name={name}
      link={link}
    />
  );
});

export default TechnologySections;
