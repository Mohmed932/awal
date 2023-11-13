// import Sections from "@/components/Sections/Sections";
// import SectionsViews from "@/components/Sections/SectionsViews";
// import { Fragment, Suspense } from "react";

// const art = async () => {
//     const reqArt = await fetch("https://serverawalbawl.vercel.app/news/art?page=1&limit=10");
//     const resArt = await reqArt.json();
//     const ArtData = resArt.newsData
//     const reqArtViews = await fetch("https://serverawalbawl.vercel.app/news/art/views");
//     const resArtViews = await reqArtViews.json();
//     return <Fragment>
//         <Suspense fallback={<h1>ArtData</h1>}><Sections Data={ArtData} /></Suspense>
//         <Suspense fallback={<h1>ArtViews.....</h1>}><SectionsViews ViewsData={resArtViews} /></Suspense>
//     </Fragment>
// }

// export default art
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page