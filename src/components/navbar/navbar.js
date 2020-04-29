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
        link: "/deportes/",
        text: "Deportes",
      },
      {
        link: "/sociedad/",
        text: "Sociedad",
      },
      {
        link: "/politica/",
        text: "Politica",
      },
      {
        link: "/turismo/",
        text: "Turismo",
      },
      {
        link: "/salud/",
        text: "Salud",
      },
      {
        link: "/cultura/",
        text: "Cultura",
      },
      {
        link: "/deportes/",
        text: "Deportes",
      },
      {
        link: "/tecnologia/",
        text: "Tecnologia",
      },
    ];
    return (
      <>
        <div className="navbar">
          <button onClick={this.Menu}>
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
          </ul>
        </div>
      </>
    );
  }
}
export default Navbar;
