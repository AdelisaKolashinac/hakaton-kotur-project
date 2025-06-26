import React from "react";
import "../Events.css";

const Banner: React.FC = () => {
  return (
    <section className="banner-section">
      <div className="angled-image-container">
        <div className="angled-image"></div>
        <div className="festival-text">
          <span className="kotur">к о т у р</span>
          <span className="dzirni-festival">ѕ и р н и ф е с т и в а л</span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
