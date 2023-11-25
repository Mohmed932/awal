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
  const InitialValue = {
    status: "loading",
    data: null,
    error: null,
  };
  const [state, dispatch] = useReducer(dataReducer, InitialValue);
  const [stateSearch, dispatchSearch] = useReducer(dataReducer, InitialValue);
  const [stateArt, dispatchArt] = useReducer(dataReducer, InitialValue);
  const [stateCareers, dispatchCareers] = useReducer(dataReducer, InitialValue);
  const [stateCulture, dispatchCulture] = useReducer(dataReducer, InitialValue);
  const [stateEconomy, dispatchEconomy] = useReducer(dataReducer, InitialValue);
  const [stateEvents, dispatchEvents] = useReducer(dataReducer, InitialValue);
  const [stateHealth, dispatchHealth] = useReducer(dataReducer, InitialValue);
  const [stateSchool, dispatchSchool] = useReducer(dataReducer, InitialValue);
  const [stateSports, dispatchSports] = useReducer(dataReducer, InitialValue);
  const [stateViews, dispatchViews] = useReducer(dataReducer, InitialValue);
  const [stateTechnology, dispatchTechnology] = useReducer(
    dataReducer,
    InitialValue
  );
  const [stateWorld, dispatchWorld] = useReducer(dataReducer, InitialValue);
  const [statePolitics, dispatchPolitics] = useReducer(
    dataReducer,
    InitialValue
  );
  const [stateInvestigations, dispatchInvestigations] = useReducer(
    dataReducer,
    InitialValue
  );
  const [stateEmbassies, dispatchEmbassies] = useReducer(
    dataReducer,
    InitialValue
  );
  const [stateNewsRelease, dispatchNewsRelease] = useReducer(
    dataReducer,
    InitialValue
  );
  const contextValue = {
    dispatch,
    state,
    dispatchSearch,
    stateSearch,
    dispatchArt,
    stateArt,
    dispatchCareers,
    stateCareers,
    stateCulture,
    dispatchCulture,
    stateEconomy,
    dispatchEconomy,
    stateEmbassies,
    dispatchEmbassies,
    stateEvents,
    dispatchEvents,
    stateHealth,
    dispatchHealth,
    stateInvestigations,
    dispatchInvestigations,
    statePolitics,
    dispatchPolitics,
    stateSchool,
    dispatchSchool,
    stateSports,
    dispatchSports,
    stateTechnology,
    dispatchTechnology,
    stateWorld,
    dispatchWorld,
    stateNewsRelease,
    dispatchNewsRelease,
    dispatchViews,
    stateViews,
  };
  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
}
