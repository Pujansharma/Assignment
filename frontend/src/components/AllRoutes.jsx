import { Routes, Route } from "react-router-dom";

import React from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import Posts from "./Posts";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Posts />} />
    </Routes>
  );
};

export default AllRoutes;
