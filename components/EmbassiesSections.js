"use client";
import React, { memo, useContext } from "react";
import { useEffect } from "react";
import MainSections from "./MainSections";
import { DataContext } from "@/app/context";

const Embassies_servicesSections = memo(() => {
  const { stateEmbassies, dispatchEmbassies } = useContext(DataContext);
  const handelData = async () => {
    try {
      dispatchEmbassies({ type: "LOADING", payload: null });
      const req = await fetch(
        "https://serverawalbawl.vercel.app/news/embassies?page=1&limit=10"
      );
      const res = await req.json();
      dispatchEmbassies({ type: "LOADED", payload: res });
    } catch (error) {
      dispatchEmbassies({ type: "ERROR", payload: error.message });
    }
  };
  useEffect(() => {
    handelData();
  }, []);
  const name = "سفارات";
  const link = "embassies_services";
  return (
    <MainSections
      NewsSection={stateEmbassies.data}
      loading={stateEmbassies.status}
      name={name}
      link={link}
    />
  );
});

export default Embassies_servicesSections;
