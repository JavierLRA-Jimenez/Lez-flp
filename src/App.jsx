import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './Components/Container';
import Fear from './Components/Fear/Fear';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/Fear" element={<Fear />} />
      </Routes>
    </Router>
  );
};

export default App;
