import React from "react";
import { Routes, Route } from "react-router-dom";
import Students from "./Students";
import Home from "./Home";
import Contact from "./Contact";
import StudentDesc from "./StudentDesc";
import EditStudent from "./EditStudent";

function RouteCompo() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add-student" element={<StudentDesc />} />
        <Route path="/edit-student" element={<EditStudent />} />
      </Routes>
    </div>
  );
}
export default RouteCompo;
