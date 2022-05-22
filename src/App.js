import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./views/Contact";
import CurriculumVitae from "./views/CurriculumVitae";
import Home from "./views/Home";
import Projet from "./views/Projet";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projet" element={<Projet />} />
          <Route path="curriculumvitae" element={<CurriculumVitae />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
