import Sections from "@/components/Sections/Sections";
import SectionsViews from "@/components/Sections/SectionsViews";
import { Fragment, Suspense } from "react";

const technology = async () => {
    const reqtechnology = await fetch("https://serverawalbawl.vercel.app/news/technology?page=1&limit=10");
    const restechnology = await reqtechnology.json();
    const technologyData = restechnology.newsData
    const reqtechnologyViews = await fetch("https://serverawalbawl.vercel.app/news/technology/views");
    const restechnologyViews = await reqtechnologyViews.json();
    return <Fragment>
        <Suspense fallback={<h1>technologyData</h1>}><Sections Data={technologyData} /></Suspense>
        <Suspense fallback={<h1>technologyViews.....</h1>}><SectionsViews ViewsData={restechnologyViews} /></Suspense>
    </Fragment>
}

export default technology
