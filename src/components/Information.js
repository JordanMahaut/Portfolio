import React from "react";

const Information = () => {
  return (
    <div className="contact">
      <div className="Name">
        <p>
          <strong> Email : </strong>
        </p>

        <p>
          <strong>N° de téléphone : </strong>
        </p>

        <p>
          <strong>LinkedIn : </strong>
        </p>
      </div>

      <div className="Info">
        <p>jordanmahaut09@gmail.com</p>
        <p>06 02 40 58 14</p>
        <p>
          <a href="https://www.linkedin.com/in/jordan-mahaut-b30908227/">
            Jordan Mahaut
          </a>
        </p>
      </div>
    </div>
  );
};

export default Information;
