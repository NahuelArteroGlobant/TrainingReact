import React from "react";
import "./aside.scss";

function Aside() {
  const items = [
    {
      link: "/deportes/noticia1",
      text: "noticia de deportes",
      src: process.env.PUBLIC_URL + "/images/tenis.jpg",
      alt: "noticia de deportes",
    },
    {
      link: "/politica/noticia1",
      text: "noticia de politica",
      src: process.env.PUBLIC_URL + "/images/Fernandez.jpeg",
      alt: "noticia de politica",
    },
    {
      link: "/tecnologia/noticia1",
      text: "noticia de tecnologia",
      src: process.env.PUBLIC_URL + "/images/tecnologia.jpg",
      alt: "noticia de tecnologia",
    },
  ];
  return (
    <aside className="aside">
      <ul className="aside__items">
        {items.map((objLink, i) => {
          return (
            <li key={i}>
              <a href={objLink.link}>
                <h3>{objLink.text}</h3>
                <img
                  className="aside__items--img"
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
