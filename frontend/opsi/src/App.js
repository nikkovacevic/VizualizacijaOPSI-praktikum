import logo from './logo.svg';
import React from 'react';
import './App.css';
import './components/Dashboard'
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './components/Home';
import Navbar from './components/Navbar/index';
import About from './components/About';
import MapRegije from './components/Map';

//<Dashboard/>

function App() {
  return (
    <Router>
      <Navbar />
      
    <Switch>

      <Route path='/' exact component={Home} />

      <Route path='/map' component={MapRegije} />
        
      <Route path='/about' component={About} />

      <Route path='/dashboard' component={Dashboard} />
      
      </Switch>
      
  </Router>


  );
}

export default App;
