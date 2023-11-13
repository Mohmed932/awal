import Sections from "@/components/Sections/Sections";
import SectionsViews from "@/components/Sections/SectionsViews";
import { Fragment, Suspense } from "react";

const politics = async () => {
    const reqpolitics = await fetch("https://serverawalbawl.vercel.app/news/politics?page=1&limit=10");
    const respolitics = await reqpolitics.json();
    const politicsData = respolitics.newsData
    const reqpoliticsViews = await fetch("https://serverawalbawl.vercel.app/news/politics/views");
    const respoliticsViews = await reqpoliticsViews.json();
    return <Fragment>
        <Suspense fallback={<h1>politicsData</h1>}><Sections Data={politicsData} /></Suspense>
        <Suspense fallback={<h1>politicsViews.....</h1>}><SectionsViews ViewsData={respoliticsViews} /></Suspense>
    </Fragment>
}

export default politics
