import React from "react";
import "./App.css";
import logo from "../src/images/logo1.png";
import logo2 from "../src/images/newsAvatar.png";

class App extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home__header">
          <img src={logo} alt="Logo " />
          <h1>Diario Digital</h1>
        </div>
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
}
export default App;
