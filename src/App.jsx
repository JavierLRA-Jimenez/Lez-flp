import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './Components/Container';
import Carousel from './Components/Carousel/Carousel';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/Carousel" element={<Carousel />} />
      </Routes>
    </Router>
  );
};

export default App;
