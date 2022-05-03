import React from "react";

const BtnOpciones = ({ opcionPlayer }) => {
  return (
    <div className="row mt-3">
      <div className="col">
        <h4>Elege alguna de las siguientes opciones</h4>
        <button
          className="btn btn-warning me-2"
          onClick={() => opcionPlayer(0)}
        >
          <i className="fa fa-hand-rock-o fa-4x" aria-hidden="true"></i>
        </button>
        <button className="btn btn-info me-2" onClick={() => opcionPlayer(1)}>
          <i className="fa fa-hand-paper-o fa-4x" aria-hidden="true"></i>
        </button>
        <button className="btn btn-danger me-2" onClick={() => opcionPlayer(2)}>
          <i className="fa fa-hand-scissors-o fa-4x" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default BtnOpciones;
