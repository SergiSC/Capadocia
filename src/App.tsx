import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './views/about/about';
import Carta from './views/carta/carta';
import Contact from './views/contact/contact';
import Home from './views/home/home';
import Reservation from './views/reservation/reservation';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home sectionId='home' />
      <About sectionId='about' />
      <Carta sectionId='carta' />
      <Reservation sectionId='reservation' />
      <Contact sectionId='contact' />
    </div>
  );
}

export default App;
