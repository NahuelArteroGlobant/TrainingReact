import React from "react";
import "./spinner.scss";

function Spinner() {
  return (
    <div className="spinner">
      <h1 className="spinner__title">Loading...</h1>
      <div id="load"></div>
    </div>
  );
}
export default Spinner;
