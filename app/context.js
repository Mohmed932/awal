"use client";

import { createContext, useReducer, useState } from "react";

export const DataContext = createContext();

function dataReducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { status: "loading", data: null, error: null };
    case "LOADED":
      return { status: "loaded", data: action.payload, error: null };
    case "ERROR":
      return { status: "error", data: null, error: action.payload };
    default:
      return state;
  }
}

export default function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [state, dispatch] = useReducer(dataReducer, {
    status: "loading",
    data: null,
    error: null,
  });
  const [stateSearch, dispatchSearch] = useReducer(dataReducer, {
    status: "loading",
    data: null,
    error: null,
  });
  const contextValue = {dispatch, state, stateSearch, dispatchSearch ,isDarkMode, setIsDarkMode}
  return (
    <DataContext.Provider
      value={contextValue}
    >
      {children}
    </DataContext.Provider>
  );
}
