import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './views/about/about';
import Carta from './views/carta/carta';
import Contact from './views/contact/contact';
import Home from './views/home/home';
import Reservation from './views/reservation/reservation';

function App() {

  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setDeviceWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <div className="App">
      <NavBar />
      <Home sectionId='home' />
      <About sectionId='about' />
      <Carta sectionId='carta' deviceWidth={deviceWidth} />
      <Reservation sectionId='reservation' />
      <Contact sectionId='contact' deviceWidth={deviceWidth} />
    </div>
  );
}

export default App;
