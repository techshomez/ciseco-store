import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./discover.css";

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
  return (
    <div className="discover">
      <h1>
        Discover more. <span>Good things are waiting for you</span>
      </h1>
      <div className="discover__wrapper">
        <div className="discover__item">
          <Carousel responsive={responsive}>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Discover;
