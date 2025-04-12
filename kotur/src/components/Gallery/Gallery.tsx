import React, { useState } from "react";
import Header from "../Header/Header";
import "./Gallery.css";
import Gallery_carousel_1 from "./Gallery_carousel_1";
import Gallery_carousel_2 from "./Gallery_carousel_2";
import Gallery_carousel_3 from "./Gallery_carousel_3";
import Gallery_carousel_4 from "./Gallery_carousel_4";
import Gallery_carousel_5 from "./Gallery_carousel_5";
import Gallery_carousel_6 from "./Gallery_carousel_6";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";

function Gallery() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <Header />
      <div className="gallery-hero-banner"></div>
      <div className="gallery-past d-flex justify-content-center">
        <h3 className="gallery-h3 ">Поминати настани</h3>
      </div>
      <div className="gallery-events d-flex flex-column">
        <Gallery_carousel_1 />
        <Gallery_carousel_2 />
        <Gallery_carousel_3 />
      </div>
      <div className="gallery-expand-button d-flex justify-content-center align-items-center">
        <button className="gallery-expand-btn" onClick={toggleShowMore}>
          {showMore ? "Прикажи Помалку" : "Види Повеќе"}
        </button>
      </div>
      {showMore && (
        <div className="gallery-events d-flex flex-column">
          <Gallery_carousel_4 />
          <Gallery_carousel_5 />
          <Gallery_carousel_6 />
        </div>
      )}
    </div>
  );
}

export default Gallery;
