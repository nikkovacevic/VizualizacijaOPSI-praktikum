import logo from './logo.svg';
import React from 'react';
import './App.css';
import './components/Dashboard'
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Dashboard/>
    </Router>


  );
}

export default App;
