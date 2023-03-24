import React, { useState } from "react";
import "./SignUp.css";
import movie from "../../images/movie.jpg";
import axios from "axios";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://cinecritique.cyclic.app/user/signup";
      const { data: res } = await axios.post(url, data);
      window.location = "/signin";
      console.log(res.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="sign-in-container">
      <div className="left-content">
        <img className="leftImage" src={movie} alt="" />
      </div>
      <div className="right-content">
        <h1>Sign Up</h1>
        <h4>
          <span>Already have an account? </span>
          <a href="signIn.html">Sign In</a>{" "}
        </h4>
        <div className="input">
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            id="nameInput"
            onChange={handleChange}
            value={data.name}
          />
        </div>
        <div className="input">
          <label htmlFor="Email">Enter Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="emailInput"
            onChange={handleChange}
            value={data.email}
          />
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            id="passwordInput"
            onChange={handleChange}
            value={data.password}
          />
        </div>
        <div className="button">
          <button className="signbtn" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
        <div className="sign-in-bottom">
          <a>Terms</a>
          <a>Plans</a>
          <a>Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
