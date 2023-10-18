import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Switch from "react-router-dom/Switch";
import Container from './Components/Container';
import Fear from './Components/Fear/Fear';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Container} /> 
        <Route path="/fear" component={Fear} />
      </Switch>
    </Router>
  );
};

export default App;
