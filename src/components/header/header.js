import React from "react";
import "./header.scss";
import logo from "../../images/logo1.png";

function Header() {
  return (
    <div className="Home__header">
      <img src={logo} alt="Logo " />
      <h1>Diario Digital</h1>
    </div>
  );
}

export default Header;
