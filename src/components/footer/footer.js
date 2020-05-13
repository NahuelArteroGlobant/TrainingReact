import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img
        className="footer__avatar"
        src={process.env.PUBLIC_URL + "/images/logo1.png"}
        alt="Logo "
      />
      <div className="footer__div-text">
        <h4 className="footer__tittle">
          Todos Los Derechos Reservados © 2020 DIARIO DIGITAL
        </h4>
      </div>
      <div class="footer__div">
        <a href="https://www.instagram.com">
          <span className="footer__icon">
            <i class="fa fa-instagram"></i>
          </span>
        </a>
        <a href="https://twitter.com">
          <span className="footer__icon">
            <i class="fa fa-twitter-square"></i>
          </span>
        </a>
        <a href="https://www.facebook.com">
          <span className="footer__icon">
            <i class="fa fa-facebook-square"></i>
          </span>
        </a>
      </div>
    </footer>
  );
}
export default Footer;
