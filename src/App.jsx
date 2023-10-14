import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from './Components/Container';
import Fear from './Components/Fear/Fear';
const App = () => {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="https://lezflp.netlify.app/" component={Container} />
        <Route path="https://lezflp.netlify.app/Fear" component={Fear} />

      </Switch>
    </Router>
  );
};

export default App;