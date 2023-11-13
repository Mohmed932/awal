import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
// import
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const SimpleSlider = ({ last }) => {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="SimpleSlider">
      <Slider {...settings} className="SimpleSlider_Slider">
        {last.slice(3, 13).map(({ _id, title, more_details }) => (
          <Link className="Slider_item" key={_id} href={`news/${_id}`}>
            <div className="Slider_item_image">
              <img src={more_details.largeImage} alt={title} loading="lazy" />
            </div>
            <div className="Slider_item_text">
              <h3>{title}</h3>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
