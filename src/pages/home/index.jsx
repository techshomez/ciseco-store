import Banner from "../../components/home/banner";
import Discover from "../../components/home/discover";
import Steps from "../../components/home/steps";
import Earn from "../../components/reuse/earnCiseco";
import ProductCard from "../../components/reuse/productCard";
import "./home.css";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Discover />
      <ProductCard
        heading="New Arrivals."
        sub_heading="REY backpacks & bags"
        pro={[
          {
            id: 1,
            title: "Leather Gloves",
            image: "/images/product/3.png",
            desc: "Perfect mint green",
            price: "$42",
            texture: [
              "/images/texture/1.jpg",
              "/images/texture/2.jpg",
              "/images/texture/3.jpg",
              "/images/texture/4.jpg",
              "/images/texture/5.jpg",
            ],
            rating: "4.9",
            review: "98 reviews",
          },
          {
            id: 2,
            title: "Leather Gloves",
            image: "/images/product/4.png",
            desc: "Perfect mint green",
            price: "$42",
            texture: [
              "/images/texture/1.jpg",
              "/images/texture/2.jpg",
              "/images/texture/3.jpg",
              "/images/texture/4.jpg",
              "/images/texture/5.jpg",
            ],
            rating: "4.9",
            review: "98 reviews",
          },
          {
            id: 3,
            title: "Leather Gloves",
            image: "/images/product/5.png",
            desc: "Perfect mint green",
            price: "$42",
            pro_type: "new",
            texture: [
              "/images/texture/1.jpg",
              "/images/texture/2.jpg",
              "/images/texture/3.jpg",
              "/images/texture/4.jpg",
              "/images/texture/5.jpg",
            ],
            rating: "4.9",
            review: "98 reviews",
          },
          {
            id: 4,
            title: "Leather Gloves",
            image: "/images/product/6.png",
            desc: "Perfect mint green",
            price: "$42",
            texture: [
              "/images/texture/1.jpg",
              "/images/texture/2.jpg",
              "/images/texture/3.jpg",
              "/images/texture/4.jpg",
              "/images/texture/5.jpg",
            ],
            rating: "4.9",
            review: "98 reviews",
          },
          {
            id: 5,
            title: "Leather Gloves",
            image: "/images/product/2.png",
            desc: "Perfect mint green",
            price: "$42",
            texture: [
              "/images/texture/1.jpg",
              "/images/texture/2.jpg",
              "/images/texture/3.jpg",
              "/images/texture/4.jpg",
              "/images/texture/5.jpg",
            ],
            rating: "4.9",
            review: "98 reviews",
          },
        ]}
      />
      <Steps />
      <Earn />
    </div>
  );
};

export default HomePage;
