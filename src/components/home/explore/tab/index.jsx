import "./tab.css";
import {
  BsGenderFemale,
  BsGenderMale,
  BsPerson,
  BsArrowLeftRight,
  BsSuitDiamond,
  BsXDiamond,
} from "react-icons/bs";

const tab_item = [
  {
    id: 1,
    title: "Woman",
    icon: <BsGenderFemale />,
    exploreID: 1,
    cl: "tab__active",
  },
  {
    id: 2,
    title: "Man",
    icon: <BsGenderMale />,
    exploreID: 2,
  },
  {
    id: 3,
    title: "Kids",
    icon: <BsPerson />,
    exploreID: 1,
  },
  {
    id: 4,
    title: "Sports",
    icon: <BsArrowLeftRight />,
    exploreID: 1,
  },
  {
    id: 5,
    title: "Beauty",
    icon: <BsSuitDiamond />,
    exploreID: 1,
  },
  {
    id: 6,
    title: "Jewelry",
    icon: <BsXDiamond />,
    exploreID: 1,
  },
];

const ExploreTab = () => {
  return (
    <div className="tab">
      <div className="tab__item">
        {tab_item.map((list) => {
          return (
            <div
              className={
                list.cl ? "tab__item__list tab__active" : "tab__item__list"
              }
              key={list.id}
            >
              <i>{list.icon}</i>
              <span>{list.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreTab;
