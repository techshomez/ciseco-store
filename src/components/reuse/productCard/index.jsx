import "./product_card.css";
import { BsArrowLeft, BsArrowRight, BsHeart, BsStarFill } from "react-icons/bs";
import Slider from "react-slick";

const ProductCard = ({ pro, heading, sub_heading }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="product__card">
      <div className="card__title">
        <h1>
          {heading}
          <span> {sub_heading}</span>
        </h1>
      </div>
      <div className="wrapper">
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
              <div className="item__list__top">
                <div className="color">
                  <img src="/images/texture/1.jpg" alt="" />
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
      </div>
    </div>
  );
};

export default ProductCard;
