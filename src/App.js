import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import TopBar from './Components/TopBar/TopBar';
import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from './Components/SideBar';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarToggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <TopBar />
      <Navbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navbarToggleHandler={navbarToggleHandler}
      />
      <SideBar isOpen={isOpen} navbarToggleHandler={navbarToggleHandler} />
    </Router>
  );
}

export default App;
