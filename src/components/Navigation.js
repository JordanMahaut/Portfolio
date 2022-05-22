import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
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
      </ul>
    </div>
  );
};

export default Navigation;
