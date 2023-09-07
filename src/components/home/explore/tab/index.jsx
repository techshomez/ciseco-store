import "./tab.css";
import { BsGenderFemale } from "react-icons/bs";

const ExploreTab = () => {
  return (
    <div className="tab">
      <div className="tab__item">
        <div className="tab__item__list">
          <i>
            <BsGenderFemale />
          </i>
          <span>Woman</span>
        </div>
        <div className="tab__item__list">
          <i>
            <BsGenderFemale />
          </i>
          <span>Woman</span>
        </div>
        <div className="tab__item__list tab__active">
          <i>
            <BsGenderFemale />
          </i>
          <span>Woman</span>
        </div>
        <div className="tab__item__list">
          <i>
            <BsGenderFemale />
          </i>
          <span>Woman</span>
        </div>
        <div className="tab__item__list">
          <i>
            <BsGenderFemale />
          </i>
          <span>Woman</span>
        </div>
        <div className="tab__item__list">
          <i>
            <BsGenderFemale />
          </i>
          <span>Woman</span>
        </div>
      </div>
    </div>
  );
};

export default ExploreTab;
