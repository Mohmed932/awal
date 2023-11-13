import Sections from "@/components/Sections/Sections";
import SectionsViews from "@/components/Sections/SectionsViews";
import { Fragment, Suspense } from "react";

const sports = async () => {
    const reqsports = await fetch("https://serverawalbawl.vercel.app/news/sports?page=1&limit=10");
    const ressports = await reqsports.json();
    const sportsData = ressports.newsData
    const reqsportsViews = await fetch("https://serverawalbawl.vercel.app/news/sports/views");
    const ressportsViews = await reqsportsViews.json();
    return <Fragment>
        <Suspense fallback={<h1>sportsData</h1>}><Sections Data={sportsData} /></Suspense>
        <Suspense fallback={<h1>sportsViews.....</h1>}><SectionsViews ViewsData={ressportsViews} /></Suspense>
    </Fragment>
}

export default sports
