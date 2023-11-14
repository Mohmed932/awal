"use client";
import React, { memo, useContext } from "react";
import { useEffect } from "react";
import MainSections from "./MainSections";
import { DataContext } from "@/app/context";

const CareersSections = memo(() => {
  const { stateCareers, dispatchCareers } = useContext(DataContext);
  const handelData = async () => {
    try {
      dispatchCareers({ type: "LOADING", payload: null });
      const req = await fetch(
        "https://serverawalbawl.vercel.app/news/career?page=1&limit=10"
      );
      const res = await req.json();
      dispatchCareers({ type: "LOADED", payload: res });
    } catch (error) {
      dispatchCareers({ type: "ERROR", payload: error.message });
    }
  };
  useEffect(() => {
    handelData();
  }, []);
  const name = "وظائف";
  const link = "careers";
  return (
    <MainSections
      NewsSection={stateCareers.data}
      loading={stateCareers.status}
      name={name}
      link={link}
    />
  );
});

export default CareersSections;
