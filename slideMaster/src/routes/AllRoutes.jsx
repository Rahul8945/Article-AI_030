import React from "react";
import { Routes, Route } from "react-router-dom";
import Create from "../pages/Create";
import Saved from "../pages/Saved";
import HomePage from "../pages/HomePage.jsx";





const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/create" element={<Create/>} />
      <Route path="/saved" element={<Saved/>} />
    </Routes>
  );
};

export default AllRoutes;
