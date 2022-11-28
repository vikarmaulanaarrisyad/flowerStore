import React, { useState } from "react";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { ApiSlides } from "../API/SliderApi";
import "../style/Slider.css";
import { keyframes } from "@emotion/react";

const Slider = () => {
  // useState hooks
  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);

  // Style
  const arrowStyle =
    "rounded-full bg-grey flex justify-center items-center shadow-sm hover: cursor-pointer";

  // ArrowLeft
  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  // ArrowRight
  const nextSlide = () => {
    if (activeSlide === slides.length + 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  return (
    <div className="parentDiv h-[540px] bg-white flex items-center justify-between">
      {/* leftarrow div */}
      <div className={arrowStyle}>
        <ArrowLeftOutlinedIcon
          style={{ fontSize: "50px" }}
          onClick={prevSlide}
        />
      </div>
      {/* slide div */}

      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div
              className={
                `wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border=[#c0c0c0] border-10px overflow-hidden relative ` +
                slide.background
              }
            >
              <div className="slide flex items-center justify-center h-[100%]">
                <div className="forImage flex flex-1 justify-center items-center h-[100%]">
                  <img
                    className="h-[100%] object-cover"
                    src={slide.src}
                    alt="img-slide"
                  />
                </div>
                <div className="des flex flex-col flex-1 place-items-start justify-center ml-11">
                  <h2 className="text-[55px]">{slide.content.h2}</h2>
                  <p className="text-[30px]">{slide.content.p}</p>
                  <button className="btn">Shop Now</button>
                </div>
              </div>
            </div>
          );
        }
      })}

      {/* rightarrow div */}
      <div className={arrowStyle}>
        <ArrowRightOutlinedIcon
          style={{ fontSize: "50px" }}
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default Slider;
