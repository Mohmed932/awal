// import Sections from "@/components/Sections/Sections";
// import SectionsViews from "@/components/Sections/SectionsViews";
// import { Fragment, Suspense } from "react";

// const culture = async () => {
//     const reqculture = await fetch("https://serverawalbawl.vercel.app/news/culture?page=1&limit=10");
//     const resculture = await reqculture.json();
//     const cultureData = resculture.newsData
//     const reqcultureViews = await fetch("https://serverawalbawl.vercel.app/news/culture/views");
//     const rescultureViews = await reqcultureViews.json();
//     return <Fragment>
//         <Suspense fallback={<h1>ArtData</h1>}><Sections Data={cultureData} /></Suspense>
//         <Suspense fallback={<h1>ArtViews.....</h1>}><SectionsViews ViewsData={rescultureViews} /></Suspense>
//     </Fragment>
// }

// export default culture
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page