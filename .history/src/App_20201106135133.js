//react core modules
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import { useState } from 'react';

//import components
import Home from './components/pages/Home.jsx';
import Nav from './components/molecules/Nav.jsx';
import Login from './components/pages/Login.jsx';
import 

function App() {
  return (
    <>
      <Router>
        <div>Nav Bar title</div>
        <Route></Route>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
