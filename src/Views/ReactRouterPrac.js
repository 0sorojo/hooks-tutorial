import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Components/RRP/Home';
import About from '../Components/RRP/About';
import People from '../Components/RRP/People';
import Error from '../Components/RRP/Error';
import Person from '../Components/RRP/Person';

import Navbar from '../Components/RRP/Navbar';

// normally wrap the whole app

const ReactRouterPrac = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/people'>
          <People />
        </Route>
        <Route path='/person/:id' children={<Person />}></Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterPrac;
