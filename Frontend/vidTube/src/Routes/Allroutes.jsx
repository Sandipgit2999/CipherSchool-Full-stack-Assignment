import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Video from "../Pages/Video";
import Login from "../Pages/Login "

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/video/:id" element={<Video />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route />
      </Routes>
    </div>
  );
};

export default Allroutes;
