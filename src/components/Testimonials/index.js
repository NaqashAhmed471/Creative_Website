import React from "react";
import style from "./Testimonials.module.css";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "asssets/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "asssets/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "asssets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className={style.testimonials} id="testimonials">
      <h1>Testimonials</h1>
      <div className={style.container}>
        {data.map((data, index) => {
          return (
            <div
              className={
                data.featured ? `${style.card_featured}` : `${style.card}`
              }
              key={index}
            >
              <div className={style.top}>
                <img
                  src="asssets/right-arrow.png"
                  className={style.left}
                  alt=""
                />
                <img src={data.img} className={style.user} alt="" />
                <img src={data.icon} alt="" className={style.right} />
              </div>
              <div className={style.center}>
                <p>{data.desc}</p>
              </div>
              <div className={style.bottom}>
                <h3>{data.name}</h3>
                <h4>{data.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
