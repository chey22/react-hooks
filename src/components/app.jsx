import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Users from './Users';
import SingleUser from './SingleUser';

const App = () => {
  return (
    <Router>
      <h1 className="text-primary">Hook It Up!</h1>
      <Switch>
        <Route exact path="/:id/details" component={SingleUser} />
        <Route path="/" component={Users} />
      </Switch>
    </Router>
  );
};

export default App;
