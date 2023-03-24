import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col">
        <h4>
          <br />
          About Us
        </h4>
        <p>
          <strong>CineCritique </strong>is the world’s most trusted recommendation resources for quality entertainment.
        </p>
        <p>
          <strong>Contact : </strong>cinecritique@gmail.com
        </p>{" "}
        <br />
        <p>
          <strong>What's the Critiquemeter®?</strong>
        </p>
      </div>
      <div className="col">
        <h4>Legal</h4>
        <a href="#">Licence Agreement</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Condition</a>
        <a href="#">Cookies Policy</a>
      </div>
      <div className="col">
        <h4>Links</h4>
        <a href="#">Critic Submission</a>
        <a href="#">Licensing</a>
        <a href="#">Advertise With Us</a>
        <a href="#">Help</a>
      </div>
      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Goggle Play</p>
        <div className="icon">
          <i className="fa fa-shopping-bag"></i>
          <i className="fa fa-google"></i>
        </div>
        <div className="follow">
          <h4>Follow us</h4>
          <div className="icon">
            <i className="fa fa-facebook-f"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-pinterest-p"></i>
            <i className="fa fa-youtube"></i>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>
          © CineCritique 2023 | All rights reserved. | Designed & Developed by
          M-Rifat.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
