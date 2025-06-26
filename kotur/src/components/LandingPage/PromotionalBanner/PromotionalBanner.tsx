const PromotionalBanner = () => {
  return (
    <section className="promotional">
      <div className="promotional__layout">
        <div className="promotional__left">
          <div className="promotional__event-info">
            <p className="promotional__date">12 OKT</p>
            <img
              src="/landingPage/ZIRNI.png"
              alt="Zirni festival logo"
              className="promotional__festival-icon"
            />
            <img
              src="/landingPage/FESTI.png"
              alt="FESTI"
              className="promotional__festival-icon"
            />
            <img
              src="/landingPage/VAL.png"
              alt="VAL"
              className="promotional__festival-icon"
            />
          </div>
          <div>
            <img
              src="/landingPage/promotional-zirni-img.png"
              alt="Promotional Zirni img"
              className="promotional__zirni-img"
            />
          </div>
        </div>
        <div className="promotional__right">
          <img
            src="/landingPage/promotional-main-img.jpg"
            alt="People celebrating at the promotional event"
            className="promotional__main-img"
          />
        </div>
      </div>
    </section>
  );
};
export default PromotionalBanner;
