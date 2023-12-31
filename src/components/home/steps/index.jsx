import "./steps.css";

const Steps = () => {
  return (
    <div className="steps">
      <h1>Why we are unique</h1>
      <div className="wrapper stepBg">
        <div className="step__lists">
          <img src="/images/steps/1.webp" alt="" />
          <div className="step__badge step__bg__1">
            <span>step 1</span>
          </div>
          <div className="step__title">
            <h1>Filter & Discover</h1>
          </div>
          <div className="step__desc">
            <article>
              Smart filtering and suggestions make it easy to find
            </article>
          </div>
        </div>
        <div className="step__lists">
          <img src="/images/steps/2.webp" alt="" />
          <div className="step__badge step__bg__2">
            <span>step 2</span>
          </div>
          <div className="step__title">
            <h1>Add to bag</h1>
          </div>
          <div className="step__desc">
            <article>
              Easily select the correct items and add them to the cart
            </article>
          </div>
        </div>

        <div className="step__lists">
          <img src="/images/steps/3.webp" alt="" />
          <div className="step__badge step__bg__3">
            <span>step 3</span>
          </div>
          <div className="step__title">
            <h1>Fast shipping</h1>
          </div>
          <div className="step__desc">
            <article>The carrier will confirm and ship quickly to you</article>
          </div>
        </div>
        <div className="step__lists">
          <img src="/images/steps/4.webp" alt="" />
          <div className="step__badge step__bg__4">
            <span>step 4</span>
          </div>
          <div className="step__title">
            <h1>Enjoy the product</h1>
          </div>
          <div className="step__desc">
            <article>Have fun and enjoy your 5-star quality products</article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
