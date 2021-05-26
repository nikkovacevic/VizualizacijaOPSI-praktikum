import logo from './logo.svg';
import React from 'react';
import './App.css';
import './components/Dashboard'
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';


import Navbar from './components/Navbar/index';
import About from './components/About';


function App() {
  return (
    <Router>
    <Navbar />
    <Dashboard/>
    <Routes>
      <Route path='/' exact component={About} >
        
      </Route>
      <Route path='/about' component={About} />
      <Route path='/dashboard' component={Dashboard} />
      
      </Routes>
      
  </Router>


  );
}

export default App;
