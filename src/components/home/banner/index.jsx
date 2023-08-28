import Carousel from "nuka-carousel";
import "./banner.css";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import LargeButton from "../../reuse/button/large";

import bg1 from "/images/banner/bg1.svg";
import hero1 from "/images/banner/hero1.webp";

const Banner = () => {
  return (
    <div className="banner">
      <Carousel
        renderCenterLeftControls={({ previousSlide }) => (
          <i className="slide_left" onClick={previousSlide}>
            <FaLongArrowAltLeft />
          </i>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <i className="slide_right" onClick={nextSlide}>
            <FaLongArrowAltRight />
          </i>
        )}
      >
        <div className="container" style={{ backgroundImage: `url(${bg1})` }}>
          <div className="banner__left">
            <h4>In this season, find the best</h4>
            <h1>Exclusive collection for everyone</h1>
            <LargeButton value="Explore Now" />
          </div>
          <div className="banner__right">
            <img src={hero1} alt="" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
