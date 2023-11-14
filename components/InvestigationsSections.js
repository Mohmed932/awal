"use client";
import React, { memo, useContext } from "react";
import { useEffect } from "react";
import MainSections from "./MainSections";
import { DataContext } from "@/app/context";

const InvestigationsSections = memo(() => {
  const { stateInvestigations, dispatchInvestigations } =
    useContext(DataContext);
  const handelData = async () => {
    try {
      dispatchInvestigations({ type: "LOADING", payload: null });
      const req = await fetch(
        "https://serverawalbawl.vercel.app/news/investigations?page=1&limit=10"
      );
      const res = await req.json();
      dispatchInvestigations({ type: "LOADED", payload: res });
    } catch (error) {
      dispatchInvestigations({ type: "ERROR", payload: error.message });
    }
  };
  useEffect(() => {
    handelData();
  }, []);
  const name = "تحقيقات";
  const link = "investigations";
  return (
    <MainSections
      NewsSection={stateInvestigations.data}
      loading={stateInvestigations.status}
      name={name}
      link={link}
    />
  );
});

export default InvestigationsSections;
