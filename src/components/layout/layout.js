import React from "react";
import "./layout.scss";
import Navbar from "../navbar/navbar";
import Header from "../header/header";
import Social from "../social/social";

function Layout(props) {
  return (
    <React.Fragment>
      <Social />
      <Navbar />
      <Header />
      {props.children}
    </React.Fragment>
  );
}
export default Layout;
