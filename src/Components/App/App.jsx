import React from "react";
import Home from "../../Pages/Home";
import StudentPanel from "../../Pages/StudentPanel";
import "../../index.css";
import Login from "../Login/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-panel" element={<StudentPanel />} />
      </Routes>
    </>
  );
}

export default App;
