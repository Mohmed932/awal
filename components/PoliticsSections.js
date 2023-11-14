"use client";
import React, { memo, useContext } from "react";
import { useEffect } from "react";
import MainSections from "./MainSections";
import { DataContext } from "@/app/context";

const PoliticsSections = memo(() => {
  const { statePolitics, dispatchPolitics } = useContext(DataContext);
  const handelData = async () => {
    try {
      dispatchPolitics({ type: "LOADING", payload: null });
      const req = await fetch(
        "https://serverawalbawl.vercel.app/news/politics?page=1&limit=10"
      );
      const res = await req.json();
      dispatchPolitics({ type: "LOADED", payload: res });
    } catch (error) {
      dispatchPolitics({ type: "ERROR", payload: error.message });
    }
  };
  useEffect(() => {
    handelData();
  }, []);
  const name = "سياسه";
  const link = "politics";
  return (
    <MainSections
      NewsSection={statePolitics.data}
      loading={statePolitics.status}
      name={name}
      link={link}
    />
  );
});

export default PoliticsSections;
