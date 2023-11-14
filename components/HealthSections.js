"use client";
import React, { memo, useContext } from "react";
import { useEffect } from "react";
import MainSections from "./MainSections";
import { DataContext } from "@/app/context";

const HealthSections = memo(() => {
  const { stateHealth, dispatchHealth } = useContext(DataContext);
  const handelData = async () => {
    try {
      dispatchHealth({ type: "LOADING", payload: null });
      const req = await fetch(
        "https://serverawalbawl.vercel.app/news/Health?page=1&limit=10"
      );
      const res = await req.json();
      dispatchHealth({ type: "LOADED", payload: res });
    } catch (error) {
      dispatchHealth({ type: "ERROR", payload: error.message });
    }
  };
  useEffect(() => {
    handelData();
  }, []);
  const name = "صحه";
  const link = "health";
  return (
    <MainSections
      NewsSection={stateHealth.data}
      loading={stateHealth.status}
      name={name}
      link={link}
    />
  );
});

export default HealthSections;
