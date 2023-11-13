import { configureStore } from "@reduxjs/toolkit";
import SearchAllNews from "./News/SearchNews";
import getViews from "./News/Views";
import getLastNews from "./News/LastNews";
import SingleNews from "./News/SingleNews";
import getArtNews from "./News/ArtNews";
import getWorldNews from "./News/WorldNews";
import getCareerNews from "./News/CareerNews";
import getCultureNews from "./News/CultureNews";
import getEconomyNews from "./News/EconomyNews";
import getEmbassiesNews from "./News/EmbassiesNews";
import getEventsNews from "./News/EventsNews";
import getHealthNews from "./News/HealthNews";
import getInvestigationsNews from "./News/InvestigationsNews";
import getPoliticsNews from "./News/PoliticsNews";
import getSchoolNews from "./News/SchoolNews";
import getSportsNews from "./News/SportsNews";
import getTechnologyNews from "./News/TechnologyNews";
import SimilerItems from "./News/Similer";
import SubScriber_News from "./SubScriber";

const store = configureStore({
  reducer: {
    SearchAllNews,
    getLastNews,
    getViews,
    SingleNews,
    getArtNews,
    getCareerNews,
    getCultureNews,
    getEconomyNews,
    getEmbassiesNews,
    getEventsNews,
    getHealthNews,
    getInvestigationsNews,
    getPoliticsNews,
    getSchoolNews,
    getSportsNews,
    getTechnologyNews,
    getWorldNews,
    SubScriber_News,
    SimilerItems,
  },
});
export default store;
