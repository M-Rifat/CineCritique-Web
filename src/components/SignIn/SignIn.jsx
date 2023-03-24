import React, { useState } from "react";
import "./SignIn.css";
import movie from "../../images/movie.jpg";
import axios from "axios";

const SignIn = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://cinecritique.cyclic.app/user/signin";
      const res = await axios.post(url, data);
      localStorage.setItem("token", res.data.token);
      window.location = "/";
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
        <h1>Sign In</h1>
        <h4>
          <span>New Here? </span>
          <a href="/signup">Create an Account</a>{" "}
        </h4>
        <div className="input">
          <label htmlFor="Email">Email</label>
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
        <a href="#" className="forget">
          Forget Password
        </a>
        <div className="button">
          <button className="signbtn" onClick={handleSubmit}>
            Sign In
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

export default SignIn;
