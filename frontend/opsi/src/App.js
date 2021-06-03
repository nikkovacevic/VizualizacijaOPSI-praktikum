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
import MapObcine from './components/MapObcine';
import Footer from './components/Footer';
import Poskus from './components/poskus';
//<Dashboard/>

function App() {
  return (
    <Router>
      <Navbar />
      
    <Switch>

      <Route path='/' exact component={Home} />

      <Route path='/map' component={MapRegije} />

      <Route path='/mapobcine' component={MapObcine} />
        
      <Route path='/about' component={About} />

      <Route path='/dashboard' component={Dashboard} />

      <Route path='/poskus' component={Poskus} />
      
      </Switch>
      <Footer/>
  </Router>


  );
}

export default App;
