import Sections from "@/components/Sections/Sections";
import SectionsViews from "@/components/Sections/SectionsViews";
import { Fragment, Suspense } from "react";

const economy_Stock_Exchange = async () => {
    const reqeconomy_Stock_Exchange = await fetch("https://serverawalbawl.vercel.app/news/economy_Stock_Exchange?page=1&limit=10");
    const reseconomy_Stock_Exchange = await reqeconomy_Stock_Exchange.json();
    const economy_Stock_ExchangeData = reseconomy_Stock_Exchange.newsData
    const reqeconomy_Stock_ExchangeViews = await fetch("https://serverawalbawl.vercel.app/news/economy_Stock_Exchange/views");
    const reseconomy_Stock_ExchangeViews = await reqeconomy_Stock_ExchangeViews.json();
    return <Fragment>
        <Suspense fallback={<h1>ArtData</h1>}><Sections Data={economy_Stock_ExchangeData} /></Suspense>
        <Suspense fallback={<h1>ArtViews.....</h1>}><SectionsViews ViewsData={reseconomy_Stock_ExchangeViews} /></Suspense>
    </Fragment>
}

export default economy_Stock_Exchange
