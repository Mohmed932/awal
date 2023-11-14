// import Sections from "@/components/Sections/Sections";
// import SectionsViews from "@/components/Sections/SectionsViews";
// import { Fragment, Suspense } from "react";

// const careers = async () => {
// const reqcareer = await fetch("https://serverawalbawl.vercel.app/news/career?page=1&limit=10");
// const rescareer = await reqcareer.json();
//     const careerData = rescareer.newsData
//     const reqcareerViews = await fetch("https://serverawalbawl.vercel.app/news/career/views");
//     const rescareerViews = await reqcareerViews.json();
//     return <Fragment>
//         <Suspense fallback={<h1>ArtData</h1>}><Sections Data={careerData} /></Suspense>
//         <Suspense fallback={<h1>ArtViews.....</h1>}><SectionsViews ViewsData={rescareerViews} /></Suspense>
//     </Fragment>
// }

// export default careers
import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
