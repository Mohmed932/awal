// import Sections from "@/components/Sections/Sections";
// import SectionsViews from "@/components/Sections/SectionsViews";
// import { Fragment, Suspense } from "react";

// const health = async () => {
//     const reqhealth = await fetch("https://serverawalbawl.vercel.app/news/health?page=1&limit=10");
//     const reshealth = await reqhealth.json();
//     const healthData = reshealth.newsData
//     const reqhealthViews = await fetch("https://serverawalbawl.vercel.app/news/health/views");
//     const reshealthViews = await reqhealthViews.json();
//     return <Fragment>
//         <Suspense fallback={<h1>healthData</h1>}><Sections Data={healthData} /></Suspense>
//         <Suspense fallback={<h1>healthViews.....</h1>}><SectionsViews ViewsData={reshealthViews} /></Suspense>
//     </Fragment>
// }

// export default health
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page