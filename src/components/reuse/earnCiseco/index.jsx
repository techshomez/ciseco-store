import "./earn.css";
import MediumDarkButton from "../button/medium/darkBlue";
import DefaultMediumButton from "../button/medium/default";

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
          <MediumDarkButton value="Savings combo" />
          <DefaultMediumButton value="Discover more" />
        </div>
      </div>
      <div className="earn__right">
        <img src="/images/rightLargeImg.webp" alt="" />
      </div>
    </div>
  );
};

export default Earn;
