import { Link } from "react-router-dom";
import "./explore.css";
import { BsArrowRightShort } from "react-icons/bs";
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
          <div className="item__middle">
            <h4>Manufacturer</h4>
            <span>Backpack</span>
          </div>
          <div className="item_bottom">
            <Link to="">see collection</Link>
            <i>
              <BsArrowRightShort />
            </i>
          </div>
        </div>
        <div className="explore__item">
          <div className="item__top">
            <img src="/images/product/7.png" alt="" />
            <span>155 products</span>
          </div>
          <div className="item__middle">
            <h4>Manufacturer</h4>
            <span>Backpack</span>
          </div>
          <div className="item_bottom">
            <Link to="">see collection</Link>
            <i>
              <BsArrowRightShort />
            </i>
          </div>
        </div>
        <div className="explore__item">
          <div className="item__top">
            <img src="/images/product/7.png" alt="" />
            <span>155 products</span>
          </div>
          <div className="item__middle">
            <h4>Manufacturer</h4>
            <span>Backpack</span>
          </div>
          <div className="item_bottom">
            <Link to="">see collection</Link>
            <i>
              <BsArrowRightShort />
            </i>
          </div>
        </div>
        <div className="explore__item">
          <div className="item__top">
            <img src="/images/product/7.png" alt="" />
            <span>155 products</span>
          </div>
          <div className="item__middle">
            <h4>Manufacturer</h4>
            <span>Backpack</span>
          </div>
          <div className="item_bottom">
            <Link to="">see collection</Link>
            <i>
              <BsArrowRightShort />
            </i>
          </div>
        </div>
        <div className="explore__item">
          <div className="item__top">
            <img src="/images/product/7.png" alt="" />
            <span>155 products</span>
          </div>
          <div className="item__middle">
            <h4>Manufacturer</h4>
            <span>Backpack</span>
          </div>
          <div className="item_bottom">
            <Link to="">see collection</Link>
            <i>
              <BsArrowRightShort />
            </i>
          </div>
        </div>
        <div className="explore__item">
          <div className="item__top">
            <img src="/images/product/7.png" alt="" />
            <span>155 products</span>
          </div>
          <div className="item__middle">
            <h4>Manufacturer</h4>
            <span>Backpack</span>
          </div>
          <div className="item_bottom">
            <Link to="">see collection</Link>
            <i>
              <BsArrowRightShort />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
