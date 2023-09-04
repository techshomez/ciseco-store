import "./earn.css";
import LargeButton from "../button/large/darkBlue";
import DefaultButton from "../button/large/default";

const Earn = () => {
  return (
    <div className="earn">
      <div className="earn__left">
        <img src="/images/logo.svg" alt="" />
        <h1>
          Earn free money <br />
          with Ciseco
        </h1>
        <article>With Ciseco you will get freeship & savings combo...</article>
        <div className="earn__cta">
          <LargeButton value="Savings combo" />
          <DefaultButton value="Discover more" />
        </div>
      </div>
      <div className="earn__right">
        <img src="/images/rightLargeImg.webp" alt="" />
      </div>
    </div>
  );
};

export default Earn;
