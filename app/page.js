import ArtSections from "@/components/ArtSections";
import CareersSections from "@/components/CareersSections";
import CultureSections from "@/components/CultureSections";
import Economy_Stock_ExchangeSections from "@/components/EconomySections";
import Embassies_servicesSections from "@/components/EmbassiesSections";
import EventsSections from "@/components/EventsSections";
import HealthSections from "@/components/HealthSections";
import InvestigationsSections from "@/components/InvestigationsSections";
import MostRead from "@/components/MostRead";
import NewsRelease from "@/components/NewsRelease";
import NewsTicker from "@/components/NewsTicker";
import PoliticsSections from "@/components/PoliticsSections";
import SchoolSections from "@/components/SchoolSections";
import SliderLatest from "@/components/SliderLatest";
import SportsSections from "@/components/SportsSections";
import TechnologySections from "@/components/TechnologySections";
import WorldSections from "@/components/WorldSections";


const page = async () => {
  const req = await fetch("https://serverawalbawl.vercel.app/news/last", {
    next: {
      revalidate: 60,
    },
  });
  const last = await req.json();
  return (
    <div>
      <NewsTicker last={last} />
      <SliderLatest last={last} />
      <MostRead />
      <ArtSections />
      <CareersSections />
      <CultureSections />
      <Economy_Stock_ExchangeSections />
      <Embassies_servicesSections />
      <EventsSections />
      <HealthSections />
      <InvestigationsSections />
      <PoliticsSections />
      <SchoolSections />
      <SportsSections />
      <TechnologySections />
      <WorldSections />
      <NewsRelease />
    </div>
  );
};

export default page;
