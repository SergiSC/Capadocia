import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { About } from "./views/About";
import Carta from "./views/carta/carta";
import Contact from "./views/contact/contact";
import { Home } from "./views/Home";
import { Footer } from "./components/Footer";

function App() {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setDeviceWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="App">
      <NavBar />
      <Home sectionId="home" />
      <About sectionId="about" deviceWidth={deviceWidth} />
      <Carta sectionId="carta" deviceWidth={deviceWidth} />
      <Contact sectionId="contact" deviceWidth={deviceWidth} />
      <Footer sectionId="footer" />
    </div>
  );
}

export default App;
