import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from './Components/Container';
import Fear from './Components/Fear/Fear';
const App = () => {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={Container} />
        <Route path="/Fear" component={Fear} />

      </Switch>
    </Router>
  );
};

export default App;