"use client";
import "@/app/styles/MostRead.css";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

const MostRead = () => {
  const [data, setData] = useState(null);
  const handelMostRead = async () => {
    try {
      const req = await fetch("https://serverawalbawl.vercel.app/news/views");
      const res = await req.json();
      setData(res);
    } catch (error) {
      setData(null);
      if (error) throw error;
    }
  };
  useEffect(() => {
    handelMostRead();
  }, []);
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
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="MostRead">
      <div className="MostRead_container">
        <h3>الأكثر قرأه</h3>
        <div className="MostRead_Slider">
          <Slider {...settings}>
            {data?.map(({ _id, title, more_details }) => (
              <div className="MostRead_Slider_items" key={_id}>
                <div className="MostRead_item_image">
                  <img
                    src={more_details.largeImage}
                    alt={title}
                    loading="lazy"
                  />
                </div>
                <h1>{title}</h1>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MostRead;
