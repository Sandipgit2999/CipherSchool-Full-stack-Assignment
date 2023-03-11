import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Video from "../Pages/Video";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/video/:id" element={<Video />} />
        <Route path="/" element={<Home />} />
        <Route />
      </Routes>
    </div>
  );
};

export default Allroutes;
