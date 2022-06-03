import React from "react";
import Avenir from "../components/Avenir";
import Navigation from "../components/Navigation";
import Scolaire from "../components/Scolaire";

const Projet = () => {
  return (
    <div>
      <Navigation />
      <h2>Parcours scolaire à venir</h2>

      <p className="pro">
        Je souhaiterais poursuivre ce parcours de formation/scolaire afin
        d'atteindre mon projet à venir
      </p>
      <Scolaire />
      <h2>Projet</h2>
      <Avenir />
    </div>
  );
};

export default Projet;
