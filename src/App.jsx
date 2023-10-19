import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Container from './Components/Container';
import Fear from './Components/Fear/Fear';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/fear" element={<Fear />} />
      </Routes>
    </Router>
  );
};

export default App;
