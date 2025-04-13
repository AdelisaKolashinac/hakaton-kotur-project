import React, { useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Gallery.css";

function Gallery_carousel_2() {
  const carouselRef = useRef(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  // Create a continuous scrolling effect
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollInterval: number | undefined;
    let isHovered = false;

    const startScrolling = () => {
      scrollInterval = window.setInterval(() => {
        if (!isHovered && carousel) {
          // @ts-ignore: Object is possibly 'null'
          carousel.next();
        }
      }, 2000);
    };

    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
    };

    const container = document.querySelector(".gallery-carousel-container");
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    startScrolling();

    return () => {
      if (scrollInterval) window.clearInterval(scrollInterval);
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="gallery-event">
      <div className="gallery-event-info d-flex flex-column align-items-start justify-content-center">
        <h3 className="gallery-h3">Бар Училница</h3>
        <p className="gallery-event-info-p">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
          voluptatum repellat unde dignissimos veniam maxime voluptas doloremque
          suscipit numquam fuga.
        </p>
      </div>
      <div className="gallery-carousel-container">
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          keyBoardControl={false}
          customTransition="transform 800ms ease-in-out"
          transitionDuration={200}
          containerClass="gallery-event-carousel"
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          itemClass="gallery-event-carousel-card"
          shouldResetAutoplay={false}
        >
          <div>
            <img src="/Img/Galerija/bar-ucilnica-1.jpg" alt="bar-ucilnica-1" />
          </div>
          <div>
            <img src="/Img/Galerija/bar-ucilnica-2.jpg" alt="bar-ucilnica-2" />
          </div>
          <div>
            <img src="/Img/Galerija/bar-ucilnica-3.jpg" alt="bar-ucilnica-3" />
          </div>
          <div>
            <img src="/Img/Galerija/bar-ucilnica-4.jpg" alt="bar-ucilnica-4" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Gallery_carousel_2;
