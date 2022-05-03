import React, { useState } from "react";
import swal from "sweetalert";
import BtnOpciones from "./BtnOpciones";

const JuegoPpt = () => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [bot, setBot] = useState(0);
  let player;
  const opciones = ["PIEDRA", "PAPEL", "TIJERA"];

  const opcionBot = () => {
    let random = Math.floor(Math.random() * 3);
    setBot(random);
    setBtnDisabled(true);
  };

  const mensajeAlert = (valor) => {
    if (valor === "win") {
      swal(
        "GANASTE! 🤩",
        `${opciones[player]} vence a ${opciones[bot]} `,
        "success"
      );
    } else if (valor === "empate") {
      swal(
        "EMPATE 😐",
        `${opciones[player]} es igual a ${opciones[bot]} `,
        "info"
      );
    } else {
      swal(
        "PERDISTE 😞",
        `${opciones[player]} no vence a ${opciones[bot]} `,
        "error"
      );
    }

    setBtnDisabled(false);
  };

  const opcionPlayer = (opcion) => {
    player = opcion;

    switch (true) {
      case opcion === 0 && bot === 2:
        mensajeAlert("win");

        break;
      case opcion === 1 && bot === 0:
        mensajeAlert("win");

        break;
      case opcion === 2 && bot === 1:
        mensajeAlert("win");

        break;
      case opcion === bot:
        mensajeAlert("empate");

        break;

      default:
        mensajeAlert("loser");
        break;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Piedra, Papel o Tijera</h1>
          <button
            className="btn btn-primary btn-lg mt-3"
            disabled={btnDisabled}
            onClick={opcionBot}
          >
            Empezar!
          </button>
        </div>
      </div>
      {btnDisabled && (
        <BtnOpciones opcionPlayer={opcionPlayer} />
        // <div className="row mt-3">
        //   <div className="col">
        //     <h4>Elege alguna de las siguientes opciones</h4>
        //     <button
        //       className="btn btn-warning me-2"
        //       onClick={() => opcionPlayer(0)}
        //     >
        //       <i className="fa fa-hand-rock-o fa-4x" aria-hidden="true"></i>
        //     </button>
        //     <button
        //       className="btn btn-info me-2"
        //       onClick={() => opcionPlayer(1)}
        //     >
        //       <i className="fa fa-hand-paper-o fa-4x" aria-hidden="true"></i>
        //     </button>
        //     <button
        //       className="btn btn-danger me-2"
        //       onClick={() => opcionPlayer(2)}
        //     >
        //       <i className="fa fa-hand-scissors-o fa-4x" aria-hidden="true"></i>
        //     </button>
        //   </div>
        // </div>
      )}
    </div>
  );
};

export default JuegoPpt;
