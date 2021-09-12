import styled from "styled-components";

export const Slider = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
`;

export const Slide = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ showSlide }) => showSlide.image});
  background-position: "center";
  max-width: "100%";
  max-width: 100%;
  width: 100%;
  height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s ease-in-out;
  object-fit: cover;
  padding: 0 50px;

  @media screen and (max-width: 728px) {
    padding: 0 30px;
  }
`;

export const SlideTextWrapper = styled.div`
  text-align: center;
  color: var(--white-color);
`;

export const SlideTitle = styled.h1`
  font-size: 55px;

  @media screen and (max-width: 1024px) {
    font-size: 40px;
  }

  @media screen and (max-width: 728px) {
    font-size: 25px;
  }
`;

export const SlideDesc = styled.p`
  font-size: 30px;

  @media screen and (max-width: 728px) {
    font-size: 16px;
  }
`;

export const SlideCta = styled.button`
  background-color: var(--secondary-color);
  border-radius: 5px;
  border: 1px solid transparent;
  color: var(--white-color);
  cursor: pointer;
  margin-top: 1rem;
  outline: none;
  overflow: hidden;
  padding: 0.7rem 1.6rem;
  position: relative;
  z-index: 2;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10%;
    height: 100%;
    background-color: var(--primary-color);
    border-radius: 0 40% 40% 0;
    transition: all 0.3s ease-in-out;
    z-index: -1;
  }

  &:hover::after {
    width: 100%;
    border-radius: 0;
  }
`;

export const SliderControlButtons = styled.div`
  button {
    align-items: center;
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid var(--white-color);
    color: var(--white-color);
    display: flex;
    font-size: 1rem;
    height: 30px;
    justify-content: center;
    outline: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    z-index: 3;
    cursor: pointer;
  }
`;

export const PrevButton = styled.button`
  position: absolute;
  left: 1rem;
`;

export const NextButton = styled.button`
  position: absolute;
  right: 1rem;
  transform: translateX(-50%);
`;
