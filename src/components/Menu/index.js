import React from "react";
import style from "./Menu.module.css";

const Menu = ({ hamburgerOpen, setHamburgerOpen }) => {
  const handleClick = () => {
    setHamburgerOpen(false);
  };
  return (
    <div className={hamburgerOpen ? `${style.menuOpen}` : `${style.menu}`}>
      <ul>
        <li onClick={handleClick}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={handleClick}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={handleClick}>
          <a href="#works">Works</a>
        </li>
        <li onClick={handleClick}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={handleClick}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
