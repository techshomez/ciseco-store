import Slider from "react-slick";
import "./discover.css";
import DefaultButton from "../../reuse/button/large/default";

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
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "#eff6ff",
          borderRadius: "50px",
          border: "none",
          width: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30px",
          color: "red",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "#eff6ff",
          borderRadius: "50px",
          border: "none",
          width: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30px",
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    className: "center",
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <div className="discover">
      <h1>
        Discover more. <span>Good things are waiting for you</span>
      </h1>
      <Slider {...settings}>
        {discover_list.map((items, i) => {
          return (
            <>
              <div className="discover__item__list" id={items.klass} key={i}>
                <div className="item__list__left">
                  <h4>{items.heading}</h4>
                  <h1>{items.title}</h1>
                  <DefaultButton value="Show me all" />
                </div>
                <div className="item__list__right">
                  <img src={items.image} alt="" />
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default Discover;
