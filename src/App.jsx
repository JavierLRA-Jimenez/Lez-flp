import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './Components/Container';
import Fear from './Components/Fear/Fear';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container />}></Route> 
        <Route path="/Fear" element={<Fear />}></Route> 
      </Routes>
    </Router>
  );
};

export default App;
