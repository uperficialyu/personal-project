import React, { lazy } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'components/Container/Container';
import Home from 'pages/Home/Home.jsx';
import RuralRevitalization from 'pages/RuralRevitalization/RuralRevitalization.jsx';
import AngieWhiteTea from 'pages/AngieWhiteTea/AngieWhiteTea.jsx';
import PropagationPath from 'pages/PropagationPath/PropagationPath.jsx';
import Login from 'pages/Login/Login.jsx';
import MonographicAnalysis from 'pages/MonographicAnalysis/MonographicAnalysis.jsx';

const AppRouter = () => {
  return (
    <Router>
      <Container options={{width: 1920, height: 1080}}>
        <main className="main-bg">
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </main>
      </Container>
    </Router>
  );
};

export default AppRouter;
