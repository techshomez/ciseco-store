import "./product_card.css";
import { BsArrowLeft, BsArrowRight, BsHeart, BsStarFill } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import Slider from "react-slick";

const ProductCard = ({ pro, heading, sub_heading }) => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      Previous
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      Next
    </button>
  );

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
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
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <div className="product__card">
      <h1>
        {heading}
        <span> {sub_heading}</span>
      </h1>
      <Slider {...settings}>
        {pro.map((card, index) => {
          return (
            <div className="card__items" key={index}>
              <div className="item__list__top">
                <img src={card.image} alt="" />
                <div className="heart">
                  <i>
                    <BsHeart />
                  </i>
                </div>
                <div className="list__top__cta">
                  <button>Add to bag</button>
                  <button>Quick view</button>
                </div>
              </div>
              <div className="item__list__bottom">
                <div className="color">
                  {card.texture.map((item, i) => {
                    return <img src={item} alt="" key={i} />;
                  })}
                </div>
                <div className="item__info">
                  <h1>{card.title}</h1>
                  <span>{card.desc}</span>
                </div>
                <div className="bottom__list">
                  <div className="price">
                    <span>{card.price}</span>
                  </div>
                  <div className="review">
                    <div className="star">
                      <i>
                        <BsStarFill />
                      </i>
                      <span>{card.rating}</span>
                    </div>
                    <span>({card.review})</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductCard;
