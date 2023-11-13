"use client";

import { createContext, useReducer } from "react";

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
  return (
    <DataContext.Provider
      value={{ dispatch, state, stateSearch, dispatchSearch }}
    >
      {children}
    </DataContext.Provider>
  );
}
