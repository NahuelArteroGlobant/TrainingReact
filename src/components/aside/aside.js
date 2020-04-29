import React from "react";
import "./aside.scss";
import img1 from "../../images/Fernandez.jpeg";
import img2 from "../../images/tenis.jpg";
import img3 from "../../images/tecnologia.jpg";

function Aside() {
  const items = [
    {
      link: "/deportes/noticia1",
      text: "noticia de deportes",
      img: <img className="aside-img" src={img2} alt="noticia de deporte" />,
    },
    {
      link: "/politica/noticia1",
      text: "noticia de politica",
      img: <img className="aside-img" src={img1} alt="noticia de politica" />,
    },
    {
      link: "/tecnologia/noticia1",
      text: "noticia de tecnologia",
      img: <img className="aside-img" src={img3} alt="noticia de tecnologia" />,
    },
  ];
  return (
    <div className="aside">
      {items.map((objLink, i) => {
        return (
          <li key={i}>
            <a href={objLink.link}>
              {" "}
              {objLink.text}
              {objLink.img}
            </a>
          </li>
        );
      })}
      ;
    </div>
  );
}

export default Aside;
