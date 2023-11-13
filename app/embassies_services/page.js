// import Sections from "@/components/Sections/Sections";
// import SectionsViews from "@/components/Sections/SectionsViews";
// import { Fragment, Suspense } from "react";

// const embassies_services = async () => {
//     const reqembassies_services = await fetch("https://serverawalbawl.vercel.app/news/embassies_services?page=1&limit=10");
//     const resembassies_services = await reqembassies_services.json();
//     const embassies_servicesData = resembassies_services.newsData
//     const reqembassies_servicesViews = await fetch("https://serverawalbawl.vercel.app/news/embassies_services/views");
//     const resembassies_servicesViews = await reqembassies_servicesViews.json();
//     return <Fragment>
//         <Suspense fallback={<h1>ArtData</h1>}><Sections Data={embassies_servicesData} /></Suspense>
//         <Suspense fallback={<h1>ArtViews.....</h1>}><SectionsViews ViewsData={resembassies_servicesViews} /></Suspense>
//     </Fragment>
// }

// export default embassies_services
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page