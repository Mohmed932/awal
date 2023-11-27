"use client";
import Slider from "react-slick";
import "@/app/styles/Views.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const SimpleSlider = ({ NewsMiscellaneous }) => {
  const CustomNextArrow = (props) => (
    <div onClick={props.onClick}>
      <AiOutlineArrowRight className="arrow_icons arrow_icons_next" />
    </div>
  );
  const CustomPrevArrow = (props) => (
    <div onClick={props.onClick}>
      <AiOutlineArrowLeft className="arrow_icons arrow_icons_Prev" />
    </div>
  );
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <section className="SimpleSlider">
      {
        <Slider {...settings}>
          {NewsMiscellaneous?.map(
            ({ _id, title, more_details: { date, largeImage } }, idx) => (
              <div className="SimpleSlider_container" key={idx}>
                <div className="Latestnews_views_img_loading">
                  <Image
                    src={largeImage}
                    alt={title || "اول باول"}
                    loading="lazy"
                    height={100}
                    width={100}
                    quality={100}
                  />
                </div>
                <Link
                  href={`/news/${_id}`}
                  onClick={() => window.scrollTo({ top: "0" })}
                >
                  <h4>{title}</h4>
                </Link>
                <span>{date}</span>
              </div>
            )
          )}
        </Slider>
      }
    </section>
  );
};

export default SimpleSlider;
