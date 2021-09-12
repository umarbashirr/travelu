import React, { Fragment, useState } from "react";
import SideBar from "../../Components/SideBar";
import Navbar from "../../Components/Navbar";
import TopBar from "../../Components/TopBar/TopBar";
import HeroSlider from "../../Components/HeroSlider";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <TopBar />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <HeroSlider />
    </Fragment>
  );
};

export default Home;
