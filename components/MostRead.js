"use client";
import "@/app/styles/MostRead.css";
import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { DataContext } from "@/app/context";
import { useRouter } from "next/navigation";
import Cricle from "./Loading/cricle";
import Image from "next/image";

const MostRead = () => {
  const route = useRouter();
  const [slidesToShow, setSlidesToShow] = useState(3);
  const { dispatchViews, stateViews } = useContext(DataContext);
  const handelMostRead = async () => {
    try {
      dispatchViews({ type: "LOADING", payload: null });
      const req = await fetch("https://serverawalbawl.vercel.app/news/views");
      const res = await req.json();
      dispatchViews({ type: "LOADED", payload: res });
    } catch (error) {
      dispatchViews({ type: "ERROR", payload: error.message });
      if (error) throw error;
    }
  };
  function SampleNextArrow({ onClick }) {
    return (
      <div className="arrow_icons arrow_icons_next" onClick={onClick}>
        <AiOutlineArrowRight />
      </div>
    );
  }
  function SamplePrevArrow({ onClick }) {
    return (
      <div className="arrow_icons arrow_icons_Prev" onClick={onClick}>
        <AiOutlineArrowLeft />
      </div>
    );
  }
  const updateSlidesToShow = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 1000) {
      setSlidesToShow(3);
    } else if (windowWidth <= 1000 && windowWidth >= 700) {
      setSlidesToShow(2);
    } else if (windowWidth < 700) {
      setSlidesToShow(1);
    }
  };
  const GoToSingleNews = (_id) => {
    route.push(`/news/${_id}`);
  };
  useEffect(() => {
    handelMostRead();
    // Update slidesToShow when the component mounts
    updateSlidesToShow();

    // Update slidesToShow when the window is resized
    window.addEventListener("resize", updateSlidesToShow);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []); // Pass an empty array to ensure this effect runs only once

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="MostRead">
      {stateViews.status === "loading" ? (
        <Cricle />
      ) : (
        <div className="MostRead_container">
          <h3>الأكثر قرأه</h3>
          <div className="MostRead_Slider">
            <Slider {...settings}>
              {stateViews.data?.map(({ _id, title, more_details }) => (
                <div
                  className="MostRead_Slider_items"
                  key={_id}
                  onClick={() => GoToSingleNews(_id)}
                >
                  <div className="MostRead_item_image">
                  <Image
                        src={largeImage}
                        alt={title || "اول باول"}
                        loading="lazy"
                        height={100}
                        width={100}
                        quality={100}
                      />
                  </div>
                  <h1>{title}</h1>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};

export default MostRead;
