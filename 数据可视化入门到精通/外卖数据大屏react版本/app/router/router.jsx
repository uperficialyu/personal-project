import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home/Home.jsx';
import Template from 'pages/Template/Template.jsx';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} /> {/*首页*/}
        <Route path="/template" exact component={Template} /> {/*演示*/}
      </Switch>
    </Router>
  );
};

export default AppRouter;
