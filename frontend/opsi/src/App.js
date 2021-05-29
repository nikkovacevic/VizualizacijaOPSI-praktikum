import logo from './logo.svg';
import React from 'react';
import './App.css';
import './components/Dashboard'
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';




import Navbar from './components/Navbar/index';
import About from './components/About';
import MapRegije from './components/Map';

//<Dashboard/>

function App() {
  return (
    <Router>
      <Navbar />
      
    <Switch>

      <Route path='/' exact component={About} />

      <Route path='/map' component={MapRegije} />
        
      <Route path='/about' component={About} />

      <Route path='/dashboard' component={Dashboard} />
      
      </Switch>
      
  </Router>


  );
}

export default App;
