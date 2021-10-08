import React, { useState } from "react";
import style from "./Works.module.css";

const Works = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: "1",
      icon: "asssets/mobile.png",
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "asssets/globe.png",
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "asssets/writing.png",
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
      : setCurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };
  return (
    <div className={style.works} id="works">
      <div
        className={style.slider}
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((data) => {
          return (
            <div className={style.container}>
              <div className={style.item}>
                <div className={style.left}>
                  <div className={style.leftContainer}>
                    <div className={style.imgContainer}>
                      <img src={data.icon} alt="icons" />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.desc}</p>
                    <span>Projects</span>
                  </div>
                </div>
                <div className={style.right}>
                  <img
                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <img
        src="asssets/arrow.png"
        className={`${style.arrow} ${style.left_arrow}`}
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="asssets/arrow.png"
        className={`${style.arrow} ${style.right_arrow}`}
        alt=""
        onClick={() => handleClick("")}
      />
    </div>
  );
};

export default Works;
