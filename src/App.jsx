import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './Components/Container';
import Header from './Components/Header/Header';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container />}></Route> 
        <Route path="/Header" element={<Header/>}></Route> 
      </Routes>
    </Router>
  );
};

export default App;
