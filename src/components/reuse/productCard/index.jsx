import "./product_card.css";
import { BsArrowLeft, BsArrowRight, BsHeart, BsStarFill } from "react-icons/bs";
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
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <div className="product__card">
      <div className="card__title">
        <h1>
          {heading}
          <span> {sub_heading}</span>
        </h1>
      </div>
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
                <div className="card__bottom">
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
                    <div className="span">({card.review})</div>
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
