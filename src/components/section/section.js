import React from "react";
import { Slide } from "react-slideshow-image";
import "./section.scss";

function Section() {
  const slideImages = [
    process.env.PUBLIC_URL + "/images/auto.jpg",
    process.env.PUBLIC_URL + "/images/politica.jpg",
    process.env.PUBLIC_URL + "/images/futbol.jpg",
    process.env.PUBLIC_URL + "/images/protestas.jpg",
  ];
  const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
  };
  return (
    <section className="section">
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
}

export default Section;
