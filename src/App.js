import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import React from "react";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <div className="content" style={{height:'700px',backgroundColor:'#EDFAFF'}}>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
