import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./views/Contact";
import CurriculumVitae from "./views/CurriculumVitae";
import Home from "./views/Home";
import LettreDeMotivation from "./views/LettreDeMotivation";
import Projet from "./views/Projet";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projet" element={<Projet />} />
          <Route path="/curriculumvitae" element={<CurriculumVitae />} />
          <Route path="/lettredemotivation" element={<LettreDeMotivation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
