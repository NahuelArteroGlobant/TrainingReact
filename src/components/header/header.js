import React from "react";
import "./header.scss";
import logo from "../../images/logo1.png";

function Header() {
  return (
    <header className="header">
      <img className="header-avatar" src={logo} alt="Logo " />
      <h1>Diario Digital</h1>
    </header>
  );
}

export default Header;
