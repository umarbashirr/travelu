import React, { Fragment, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "../Components/SideBar";
import Navbar from "../Components/Navbar";
import TopBar from "../Components/TopBar/TopBar";

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
    </Fragment>
  );
};

export default Home;
