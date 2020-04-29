import React from "react";
import "./section.scss";
import logo2 from "../../images/newsAvatar.png";

function Section() {
  return (
    <div className="section">
      <img className="section-avatar" src={logo2} alt="noticias" />
      <h1>articles con slide</h1>
    </div>
  );
}

export default Section;
