import React, { useState, useEffect } from "react";
import {
  Slider,
  Slide,
  SlideTextWrapper,
  SlideTitle,
  SlideDesc,
  SlideCta,
  SliderControlButtons,
  PrevButton,
  NextButton,
} from "./HeroSliderElement";
import { slideObj } from "../../pages/Home/Data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HeroSlider = () => {
  let currentIndex = 0;
  const [index, setIndex] = useState(0);
  const [showSlide, setShowSlide] = useState(slideObj[index]);

  //   Control Button Handler
  const prevSlideHandler = () => {
    if (index === 0) {
      setIndex(slideObj.length - 1);
    } else {
      setIndex((prevIndex) => {
        return prevIndex - 1;
      });
    }
    setShowSlide(slideObj[index]);
  };

  const nextSlideHandler = () => {
    if (index >= slideObj.length - 1) {
      setIndex(0);
    } else {
      setIndex((prevIndex) => {
        return prevIndex + 1;
      });
    }
    setShowSlide(slideObj[index]);
  };

  useEffect(() => {
    const interval = setInterval(function () {
      if (index >= slideObj.length - 1) {
        setIndex(0);
      } else {
        setIndex((prevIndex) => {
          return prevIndex + 1;
        });
      }
      setShowSlide(slideObj[index]);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Slider>
      <Slide showSlide={showSlide}>
        <SlideTextWrapper>
          <SlideTitle>{showSlide.title}</SlideTitle>
          <SlideDesc>{showSlide.desc}</SlideDesc>
          <SlideCta>Book Now</SlideCta>
        </SlideTextWrapper>
      </Slide>
      <SliderControlButtons>
        <PrevButton onClick={prevSlideHandler}>
          <FaChevronLeft />
        </PrevButton>
        <NextButton onClick={nextSlideHandler}>
          <FaChevronRight />
        </NextButton>
      </SliderControlButtons>
    </Slider>
  );
};

export default HeroSlider;
