import React from "react";
import "./header.scss";

function Header() {
  return (
    <header className="header">
      <a href="/">
        <img
          className="header__avatar"
          src={process.env.PUBLIC_URL + "/images/logo1.png"}
          alt="Logo"
        />
      </a>
      <h1>DIARIO DIGITAL</h1>
    </header>
  );
}
export default Header;
