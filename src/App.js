import React, { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Menu from "./components/Menu";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Topbar from "./components/Topbar";
import Works from "./components/Works";

function App() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <div className="app">
      <Topbar
        hamburgerOpen={hamburgerOpen}
        setHamburgerOpen={setHamburgerOpen}
      />
      <Menu hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
