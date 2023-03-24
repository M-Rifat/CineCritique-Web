import React from "react";
import "./Home.css";

import avatar from "../../images/avatar.jpg";
import john from "../../images/john.jpg";
import topgun from "../../images/topgun.jpg";
import batman from "../../images/batman.jpg";

const Home = () => {
  return (
    <section id="hero">
      <section id="product1" className="section-p1">
        <h2>Featured Movies</h2>
        <p>Best Collection With Reviews</p>
        <div className="pro-container">
          <div className="pro">
            <img src={avatar} alt="" />
            <div className="des">
              <h5>Avatar</h5>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>Vote : 91%</h4>
            </div>
          </div>
          <div className="pro">
            <img src={john} alt="" />
            <div className="des">
              <h5>John Wick:Chapter 4</h5>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>Vote : 96%</h4>
            </div>
          </div>
          <div className="pro">
            <img src={topgun} alt="" />
            <div className="des">
              <h5>Top Gun : Maverick</h5>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>Vote : 81%</h4>
            </div>
          </div>
          <div className="pro">
            <img src={batman} alt="" />
            <div className="des">
              <h5>The Batman</h5>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>Vote : 79%</h4>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
