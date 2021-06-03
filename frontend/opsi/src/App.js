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
<<<<<<< HEAD
import Poskus from './components/poskus';
=======
import NavbarNew from './components/Navbar'

>>>>>>> 9efb98ea84810e6385b26966809b350270f4ba40
//<Dashboard/>

function App() {
  return (
    <Router>
      <NavbarNew />
      
    <Switch>

      <Route path='/' exact component={Home} />

      <Route path='/regije' component={MapRegije} />

      <Route path='/obcine' component={MapObcine} />
        
      <Route path='/onas' component={About} />

<<<<<<< HEAD
      <Route path='/dashboard' component={Dashboard} />

      <Route path='/poskus' component={Poskus} />
=======
      <Route path='/statistika' component={Dashboard} />
>>>>>>> 9efb98ea84810e6385b26966809b350270f4ba40
      
      </Switch>
      <Footer/>
  </Router>


  );
}

export default App;
