import React from "react";
import "./footer.scss";

function Footer() {
  // const handleClick = (e) => {
  //   console.log("Button was clicked");
  // };

  return (
    <footer className="footer">
      <img
        className="footer__avatar"
        src={process.env.PUBLIC_URL + "/images/logo1.png"}
        alt="Logo "
      />
      <div class="footer__div">
        <a href="/subscription">
          <button className="footer__btn">
            <span>Registrate a nuestro Newsletter</span>
          </button>
        </a>
      </div>
      <div className="footer__div-text">
        <h4 className="footer__tittle">
          Todos Los Derechos Reservados © 2020 DIARIO DIGITAL
        </h4>
      </div>
    </footer>
  );
}
export default Footer;
