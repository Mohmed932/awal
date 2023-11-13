// import Sections from "@/components/Sections/Sections";
// import SectionsViews from "@/components/Sections/SectionsViews";
// import { Fragment, Suspense } from "react";

// const world = async () => {
//     const reqworld = await fetch("https://serverawalbawl.vercel.app/news/world?page=1&limit=10");
//     const resworld = await reqworld.json();
//     const worldData = resworld.newsData
//     const reqworldViews = await fetch("https://serverawalbawl.vercel.app/news/world/views");
//     const resworldViews = await reqworldViews.json();
//     return <Fragment>
//         <Suspense fallback={<h1>worldData</h1>}><Sections Data={worldData} /></Suspense>
//         <Suspense fallback={<h1>worldViews.....</h1>}><SectionsViews ViewsData={resworldViews} /></Suspense>
//     </Fragment>
// }

// export default world
import React from "react";

const page = () => {
  return <div></div>;
};

export default page;
