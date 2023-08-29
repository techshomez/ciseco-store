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
            <div className="discover__item__list">
              <div className="item__list__left">
                <h4>Explore new arrivals</h4>
                <h1>Shop the latest from top brands</h1>
                <utton>Show me all</utton>
              </div>
              <div className="item__list__right">
                <img src="/images/discover/2.png" alt="" />
              </div>
            </div>
            <div className="discover__item__list">
              <div className="item__list__left">
                <h4>Explore new arrivals</h4>
                <h1>Shop the latest from top brands</h1>
                <utton>Show me all</utton>
              </div>
              <div className="item__list__right">
                <img src="/images/discover/2.png" alt="" />
              </div>
            </div>
            <div className="discover__item__list">
              <div className="item__list__left">
                <h4>Explore new arrivals</h4>
                <h1>Shop the latest from top brands</h1>
                <utton>Show me all</utton>
              </div>
              <div className="item__list__right">
                <img src="/images/discover/2.png" alt="" />
              </div>
            </div>
            <div className="discover__item__list">
              <div className="item__list__left">
                <h4>Explore new arrivals</h4>
                <h1>Shop the latest from top brands</h1>
                <utton>Show me all</utton>
              </div>
              <div className="item__list__right">
                <img src="/images/discover/2.png" alt="" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Discover;
