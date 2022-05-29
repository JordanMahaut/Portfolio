import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="Nav">
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
        <NavLink to="/projet">
          <li>Projet</li>
        </NavLink>
        <NavLink to="/curriculumvitae">
          <li>Curriculum Vitae</li>
        </NavLink>
        <NavLink to="/lettremotivation">
          <li>Lettre de motivation</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
