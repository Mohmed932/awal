// import Sections from "@/components/Sections/Sections";
// import SectionsViews from "@/components/Sections/SectionsViews";
// import { Fragment, Suspense } from "react";

// const school = async () => {
//     const reqschool = await fetch("https://serverawalbawl.vercel.app/news/school?page=1&limit=10");
//     const resschool = await reqschool.json();
//     const schoolData = resschool.newsData
//     const reqschoolViews = await fetch("https://serverawalbawl.vercel.app/news/school/views");
//     const resschoolViews = await reqschoolViews.json();
//     return <Fragment>
//         <Suspense fallback={<h1>schoolData</h1>}><Sections Data={schoolData} /></Suspense>
//         <Suspense fallback={<h1>schoolViews.....</h1>}><SectionsViews ViewsData={resschoolViews} /></Suspense>
//     </Fragment>
// }

// export default school
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page