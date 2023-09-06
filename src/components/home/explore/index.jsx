import { Link } from "react-router-dom";
import "./explore.css";
import { BsArrowRight } from "react-icons/bs";
const Explore = () => {
  return (
    <div className="explore">
      <h1>Start exploring.</h1>
      <div className="explore__wrapper">
        <div className="explore__item">
          <div className="item__top">
            <img src="/images/product/7.png" alt="" />
            <span>155 products</span>
          </div>
          <div className="item__content">
            <div className="item__left">
              <div className="item__left__content">
                <span>Manufacturer</span>
                <h1>Backpack</h1>
              </div>
              <div className="item__left__cta">
                <Link to="">
                  see collection
                  <i>
                    <BsArrowRight />
                  </i>
                </Link>
              </div>
            </div>
            <div className="item__right">
              <img src="/images/explore1.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="explore__item">
          <div className="item__top">
            <img src="/images/product/7.png" alt="" />
            <span>155 products</span>
          </div>
          <div className="item__content">
            <div className="item__left">
              <div className="item__left__content">
                <span>Manufacturer</span>
                <h1>Backpack</h1>
              </div>
              <div className="item__left__cta">
                <Link to="">see collection</Link>
                <i>
                  <BsArrowRight />
                </i>
              </div>
            </div>
            <div className="item__right">
              <img src="/images/explore2.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="explore__item">
          <div className="item__top">
            <img src="/images/product/7.png" alt="" />
            <span>155 products</span>
          </div>
          <div className="item__content">
            <div className="item__left">
              <div className="item__left__content">
                <span>Manufacturer</span>
                <h1>Backpack</h1>
              </div>
              <div className="item__left__cta">
                <Link to="">see collection</Link>
                <i>
                  <BsArrowRight />
                </i>
              </div>
            </div>
            <div className="item__right">
              <img src="/images/explore3.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="explore__item">
          <div className="item__top">
            <img src="/images/product/7.png" alt="" />
            <span>155 products</span>
          </div>
          <div className="item__content">
            <div className="item__left">
              <div className="item__left__content">
                <span>Manufacturer</span>
                <h1>Backpack</h1>
              </div>
              <div className="item__left__cta">
                <Link to="">see collection</Link>
                <i>
                  <BsArrowRight />
                </i>
              </div>
            </div>
            <div className="item__right">
              <img src="/images/explore4.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="explore__item">
          <div className="item__top">
            <img src="/images/product/7.png" alt="" />
            <span>155 products</span>
          </div>
          <div className="item__content">
            <div className="item__left">
              <div className="item__left__content">
                <span>Manufacturer</span>
                <h1>Backpack</h1>
              </div>
              <div className="item__left__cta">
                <Link to="">see collection</Link>
                <i>
                  <BsArrowRight />
                </i>
              </div>
            </div>
            <div className="item__right">
              <img src="/images/explore5.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="explore__item">
          <div className="item__top">
            <img src="/images/product/7.png" alt="" />
            <span>155 products</span>
          </div>
          <div className="item__content">
            <div className="item__left">
              <div className="item__left__content">
                <span>Manufacturer</span>
                <h1>Backpack</h1>
              </div>
              <div className="item__left__cta">
                <Link to="">see collection</Link>
                <i>
                  <BsArrowRight />
                </i>
              </div>
            </div>
            <div className="item__right">
              <img src="/images/explore6.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
