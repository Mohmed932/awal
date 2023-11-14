"use client";
import React, { memo, useContext } from "react";
import { useEffect } from "react";
import MainSections from "./MainSections";
import { DataContext } from "@/app/context";

const SchoolSections = memo(() => {
  const { stateSchool, dispatchSchool } = useContext(DataContext);
  const handelData = async () => {
    try {
      dispatchSchool({ type: "LOADING", payload: null });
      const req = await fetch(
        "https://serverawalbawl.vercel.app/news/school?page=1&limit=10"
      );
      const res = await req.json();
      dispatchSchool({ type: "LOADED", payload: res });
    } catch (error) {
      dispatchSchool({ type: "ERROR", payload: error.message });
    }
  };
  useEffect(() => {
    handelData();
  }, []);
  const name = "تعليم";
  const link = "school";
  return (
    <MainSections
      NewsSection={stateSchool.data}
      loading={stateSchool.status}
      name={name}
      link={link}
    />
  );
});

export default SchoolSections;
