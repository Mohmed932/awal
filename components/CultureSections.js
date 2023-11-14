"use client";
import React, { memo, useContext } from "react";
import { useEffect } from "react";
import MainSections from "./MainSections";
import { DataContext } from "@/app/context";

const CultureSections = memo(() => {
  const { stateCulture, dispatchCulture } = useContext(DataContext);
  const handelData = async () => {
    try {
      dispatchCulture({ type: "LOADING", payload: null });
      const req = await fetch(
        "https://serverawalbawl.vercel.app/news/culture?page=1&limit=10"
      );
      const res = await req.json();
      dispatchCulture({ type: "LOADED", payload: res });
    } catch (error) {
      dispatchCulture({ type: "ERROR", payload: error.message });
    }
  };
  useEffect(() => {
    handelData();
  }, []);
  const name = "ثقافه";
  const link = "culture";
  return (
    <MainSections
      NewsSection={stateCulture.data}
      loading={stateCulture.status}
      name={name}
      link={link}
    />
  );
});

export default CultureSections;
