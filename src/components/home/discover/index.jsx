import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./discover.css";
import DefaultButton from "../../reuse/button/large/default";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const discover_list = [
  {
    id: 1,
    heading: "Explore new arrival",
    title: "Shop the latest from top brands",
    image: "/images/discover/2.png",
    klass: "yellow-bg",
  },
  {
    id: 2,
    heading: "Digital gift cards",
    title: "Give the gift of choice",
    image: "/images/discover/3.png",
    klass: "deep-yellow-bg",
  },
  {
    id: 3,
    heading: "Sale collection",
    title: "Up to 80% off retail",
    image: "/images/discover/1.png",
    klass: "sky-bg",
  },
  {
    id: 4,
    heading: "Sale collection",
    title: "Up to 80% off retail",
    image: "/images/discover/4.png",
    klass: "sky-bg",
  },
];

const Discover = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomRight = ({ onClick }) => (
    <button className="arrow right" onClick={onClick}>
      <FiChevronRight style={{ fontSize: "50px" }} />
    </button>
  );
  const CustomLeft = ({ onClick }) => (
    <button className="arrow left" onClick={onClick}>
      <FiChevronLeft style={{ fontSize: "50px" }} />
    </button>
  );

  return (
    <div className="discover">
      <h1>
        Discover more. <span>Good things are waiting for you</span>
      </h1>

      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        arrows={true}
        autoPlay={true}
        responsive={responsive}
        infinite={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="space"
        renderButtonGroupOutside={true}
        customRightArrow={<CustomRight />}
        customLeftArrow={<CustomLeft />}
      >
        {discover_list.map((items) => {
          return (
            <div
              className="discover__item__list"
              id={items.klass}
              key={items.id}
            >
              <div className="item__list__left">
                <h4>{items.heading}</h4>
                <h1>{items.title}</h1>
                <DefaultButton value="Show me all" />
              </div>
              <div className="item__list__right">
                <img src={items.image} alt="" />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Discover;
