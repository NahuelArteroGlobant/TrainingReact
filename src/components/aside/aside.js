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
      src: img2,
      alt: "noticia de deportes",
    },
    {
      link: "/politica/noticia1",
      text: "noticia de politica",
      src: img1,
      alt: "noticia de politica",
    },
    {
      link: "/tecnologia/noticia1",
      text: "noticia de tecnologia",
      src: img3,
      alt: "noticia de tecnologia",
    },
  ];
  return (
    <aside className="aside column">
      <ul className="items">
        {items.map((objLink, i) => {
          return (
            <li key={i}>
              <a href={objLink.link}>
                <h3>{objLink.text}</h3>
                <img
                  className="aside-img"
                  src={objLink.src}
                  alt={objLink.alt}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Aside;
