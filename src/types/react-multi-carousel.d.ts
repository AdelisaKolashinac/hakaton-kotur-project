declare module "react-multi-carousel" {
  import React from "react";

  export interface ResponsiveType {
    [key: string]: {
      breakpoint: { max: number; min: number };
      items: number;
      slidesToSlide?: number;
    };
  }

  export interface CarouselProps {
    responsive: ResponsiveType;
    deviceType?: string;
    ssr?: boolean;
    slidesToSlide?: number;
    draggable?: boolean;
    infinite?: boolean;
    autoPlay?: boolean;
    autoPlaySpeed?: number;
    keyBoardControl?: boolean;
    customTransition?: string;
    transitionDuration?: number;
    containerClass?: string;
    sliderClass?: string;
    itemClass?: string;
    removeArrowOnDeviceType?: string | string[];
    showDots?: boolean;
    renderDotsOutside?: boolean;
    dotListClass?: string;
    minimumTouchDrag?: number;
    afterChange?: (
      previousSlide: number,
      state: { currentSlide: number }
    ) => void;
    beforeChange?: (nextSlide: number, state: { currentSlide: number }) => void;
    [key: string]: any;
  }

  const Carousel: React.ComponentClass<CarouselProps>;
  export default Carousel;
}

declare module "react-multi-carousel/lib/styles.css";
