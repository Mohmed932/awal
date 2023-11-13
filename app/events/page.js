import Sections from "@/components/Sections/Sections";
import SectionsViews from "@/components/Sections/SectionsViews";
import { Fragment, Suspense } from "react";

const events = async () => {
    const reqevents = await fetch("https://serverawalbawl.vercel.app/news/events?page=1&limit=10");
    const resevents = await reqevents.json();
    const eventsData = resevents.newsData
    const reqeventsViews = await fetch("https://serverawalbawl.vercel.app/news/events/views");
    const reseventsViews = await reqeventsViews.json();
    return <Fragment>
        <Suspense fallback={<h1>eventsData</h1>}><Sections Data={eventsData} /></Suspense>
        <Suspense fallback={<h1>eventsViews.....</h1>}><SectionsViews ViewsData={reseventsViews} /></Suspense>
    </Fragment>
}

export default events
