"use client";
import React, { memo, useContext } from "react";
import { useEffect } from "react";
import MainSections from "./MainSections";
import { DataContext } from "@/app/context";

const EventsSections = memo(() => {
  const { stateEvents, dispatchEvents } = useContext(DataContext);
  const handelData = async () => {
    try {
      dispatchEvents({ type: "LOADING", payload: null });
      const req = await fetch(
        "https://serverawalbawl.vercel.app/news/events?page=1&limit=10"
      );
      const res = await req.json();
      dispatchEvents({ type: "LOADED", payload: res });
    } catch (error) {
      dispatchEvents({ type: "ERROR", payload: error.message });
    }
  };
  useEffect(() => {
    handelData();
  }, []);
  const name = "احداث";
  const link = "events";
  return (
    <MainSections
      NewsSection={stateEvents.data}
      loading={stateEvents.status}
      name={name}
      link={link}
    />
  );
});

export default EventsSections;
