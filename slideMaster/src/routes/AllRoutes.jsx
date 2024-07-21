import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Create from "../pages/Create";
import Saved from "../pages/Saved";
import Home from "../pages/HomePage.jsx";
import { PrivateRoute } from "./PrivateRoute.jsx";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<PrivateRoute element={<Create />} />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AllRoutes;
