"use client";
import React, { memo, useContext } from "react";
import { useEffect } from "react";
import MainSections from "./MainSections";
import { DataContext } from "@/app/context";

const WorldSections = memo(() => {
  const { stateWorld, dispatchWorld } = useContext(DataContext);
  const handelData = async () => {
    try {
      dispatchWorld({ type: "LOADING", payload: null });
      const req = await fetch(
        "https://serverawalbawl.vercel.app/news/World?page=1&limit=10"
      );
      const res = await req.json();
      dispatchWorld({ type: "LOADED", payload: res });
    } catch (error) {
      dispatchWorld({ type: "ERROR", payload: error.message });
    }
  };
  useEffect(() => {
    handelData();
  }, []);
  const name = "عالم وعرب";
  const link = "world";
  return (
    <MainSections
      NewsSection={stateWorld.data}
      loading={stateWorld.status}
      name={name}
      link={link}
    />
  );
});

export default WorldSections;
