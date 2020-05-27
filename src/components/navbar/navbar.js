import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import "./navbar.scss";

class Navbar extends Component {
  state = {
    menu: false,
  };
  Menu = () => {
    this.setState({ menu: !this.state.menu });
  };
  render() {
    const li = [
      {
        link: "/",
        text: "Home",
      },
      {
        link: "/ultimas-noticias/",
        text: "Ultimas Noticias",
      },
      {
        link: "/deportes/",
        text: "Deportes",
      },
      {
        link: "/politica/",
        text: "Politica",
      },
    ];
    return (
      <nav className="navbar">
        <button onClick={this.Menu} className="navbar__button">
          <FaAlignRight />
        </button>
        <ul className={this.state.menu ? "links show-nav" : "links"}>
          {li.map((objLink, i) => {
            return (
              <li key={i}>
                <a href={objLink.link}>{objLink.text}</a>
              </li>
            );
          })}
          <input
            id="search"
            type="search"
            placeholder="Busca en el sitio..."
          ></input>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
