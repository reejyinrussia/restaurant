import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import MenuItem from './components/MenuItem';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import { Container } from 'semantic-ui-react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => (
  <Container>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/menuitems" component={MenuItem} />
    <Route path="/login" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
    <Route component={NoMatch} />
    </Switch>
  </Container>
);

export default App;
