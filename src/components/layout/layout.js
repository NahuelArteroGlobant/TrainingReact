import React from "react";
import "./layout.scss";
import Navbar from "../navbar/navbar";
import Header from "../header/header";
import Social from "../social/social";

function Layout(props) {
  return (
    <div className="container">
      <Social />
      <Navbar />
      <Header />
      {props.children}
    </div>
  );
}
export default Layout;
