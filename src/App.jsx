import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from './Components/Container';
import Fear from './Components/Fear/Fear';
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Container />
          </Route>
          <Route path="/fear">
            <Fear />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};