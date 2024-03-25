import React, { useState } from "react";
import Atendimento from "./Atendimento";

const Ex010 = () => {
  const [pacientes, setPacientes] = useState([]);
  const [fila, setFila] = useState(false);
  return (
    <section>
      <h2>Fila de Espera</h2>
      <div className="box">
        <div className="menu">
          <p>Seja bem-vindo! Escolha uma das opções abaixo:</p>
          <button>Iniciar Atendimento</button>
          <button>Consultar Paciente</button>
          <button>Sair</button>
        </div>
        {pacientes.length > 0 ? (
          <div className="mostrar">
            <ul>
              {pacientes.map((paciente, index) => (
                <li key={index}>
                  {index + 1}º - {paciente}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Não há pacientes na fila.</p>
        )}
        <div className="mostrar">
          <Atendimento />
        </div>
      </div>
    </section>
  );
};

export default Ex010;
