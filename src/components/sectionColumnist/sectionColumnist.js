import React from "react";
import "./sectionColumnist.scss";

function SectionColumnist() {
  const items = [
    {
      link: "/columnistas/periodista1",
      text: "Titulo pinion periodista 1",
      src: process.env.PUBLIC_URL + "/images/newsAvatar.png",
      alt: "Periodista1",
    },
    {
      link: "/columnistas/periodista2",
      text: "Titulo pinion periodista 2",
      src: process.env.PUBLIC_URL + "/images/newsAvatar.png",
      alt: "Periodista2",
    },
    {
      link: "/columnistas/periodista3",
      text: "Titulo pinion periodista 3",
      src: process.env.PUBLIC_URL + "/images/newsAvatar.png",
      alt: "Periodista3",
    },
  ];
  return (
    <div className="columnist">
      <ul className="columnist__items">
        {items.map((objectLink, i) => {
          return (
            <li key={i}>
              <a href={objectLink.link}>
                <img
                  className="columnist__items--img"
                  src={objectLink.src}
                  alt={objectLink.alt}
                />
                <h3>{objectLink.text}</h3>
                <p>{objectLink.p}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default SectionColumnist;
