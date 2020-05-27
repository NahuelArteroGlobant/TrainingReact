import React from "react";
import "./social.scss";

function Social() {
  return (
    <div className="social">
      <ul>
        <li>
          <a href="https://www.facebook.com/">
            <img
              className="icon-facebook"
              src={process.env.PUBLIC_URL + "/images/face.png"}
              alt="Facebook"
            ></img>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/">
            <img
              className="icon-twitter"
              src={process.env.PUBLIC_URL + "/images/tweet.png"}
              alt="Twitter"
            ></img>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <img
              className="icon-instagram"
              src={process.env.PUBLIC_URL + "/images/insta.png"}
              alt="Instagram"
            ></img>
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Social;
