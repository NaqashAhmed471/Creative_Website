import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import style from "./Intro.module.css";

const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      startDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);
  return (
    <div className={style.intro} id="intro">
      <div className={style.left}>
        <div className={style.imgContainer}>
          <img src="asssets/man.png" alt="man" />
        </div>
      </div>
      <div className={style.right}>
        <div className={style.wrapper}>
          <h2>Hi There , I'm</h2>
          <h1>Safak Kocaoglu</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="asssets/down.png" alt="down" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
