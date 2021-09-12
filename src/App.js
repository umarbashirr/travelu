import React from 'react';
import Navbar from './Components/Navbar';
import TopBar from './Components/TopBar/TopBar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <TopBar />
      <Navbar />
    </Router>
  );
}

export default App;
