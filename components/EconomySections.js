"use client";
import { memo, useContext } from "react";
import { useEffect } from "react";
import MainSections from "./MainSections";
import { DataContext } from "@/app/context";

const Economy_Stock_ExchangeSections = memo(() => {
  const { stateEconomy, dispatchEconomy } = useContext(DataContext);
  const handelData = async () => {
    try {
      dispatchEconomy({ type: "LOADING", payload: null });
      const req = await fetch(
        "https://serverawalbawl.vercel.app/news/economy?page=1&limit=10"
      );
      const res = await req.json();
      dispatchEconomy({ type: "LOADED", payload: res });
    } catch (error) {
      dispatchEconomy({ type: "ERROR", payload: error.message });
    }
  };
  useEffect(() => {
    handelData();
  }, []);
  const name = "اقتصاد";
  const link = "economy_Stock_Exchange";
  return (
    <MainSections
      NewsSection={stateEconomy.data}
      loading={stateEconomy.status}
      name={name}
      link={link}
    />
  );
});

export default Economy_Stock_ExchangeSections;
