import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
import camera from "../../images/camera.png";
import jwtDecode from "jwt-decode";

const NavBar = () => {
  const token = localStorage.getItem("token");

  let decoded;
  try {
    decoded = jwtDecode(token);
  } catch (e) {}

  const handleLogout = () => {
    localStorage.clear();
    window.location = "/";
  };

  return (
    <section id="header">
      <div className="headLogo">
        <a className="logo" href="#">
          <img src={camera} className="logo" alt="" />
        </a>
        <p className="title">Cinecritique</p>
      </div>
      <nav>
        <ul id="navbar">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">News</a>
          </li>
          <li>
            <a href="/">Movies</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
        </ul>
      </nav>
      <div className="sign-in">
        {token !== "undefined" && token ? (
          <>
            <a className="profile" href="/profile">
              {decoded.name ? decoded.name : "Profile"}
            </a>
            <a onClick={handleLogout}>
              <button className="create-button">LogOut</button>
            </a>
          </>
        ) : (
          <>
            <a href="signin">Sign In</a>
            <a href="signup">
              <button className="create-button">Create Free Account</button>
            </a>
          </>
        )}
      </div>
    </section>
  );
};

export default NavBar;
