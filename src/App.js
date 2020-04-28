import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import logo2 from "../src/images/newsAvatar.png";

function App() {
  return (
    <div className="Home">
      <Header />

      <div className="Home__section-name">
        <img className="Home__avatar" src={logo2} alt="noticias" />
        <h1>nombre del periodista</h1>
      </div>
      <div className="Home__section-info">
        <p>diario en formato digital</p>
        <p>bla bla bla</p>
      </div>
      <div className="Home__footer"> #NoticiasDeHoy</div>
    </div>
  );
}

export default App;
