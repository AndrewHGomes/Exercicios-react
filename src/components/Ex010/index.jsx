import React, { useState } from "react";
import Atendimento from "./Atendimento";

const Ex010 = () => {
  const [atendimento, setAtendimento] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [pacienteConsultado, setPacienteConsultado] = useState("");
  const [consultar, setConsultar] = useState(false);
  const [sair, setSair] = useState(false);

  const handleAtendimento = () => {
    setAtendimento(true);
  };

  const handleAdicionar = (paciente) => {
    setPacientes((prevPacientes) => [...prevPacientes, paciente]);
    setAtendimento(false);
  };

  const handleConsultar = () => {
    setPacienteConsultado(pacientes[0]);
    setPacientes((prevPacientes) =>
      prevPacientes.filter((paciente, index) => index !== 0)
    );
    setConsultar(true);
  };

  const handleSair = () => {
    setSair(true);
  };

  const resetar = () => {
    setPacientes(false);
    setSair(false);
  };

  return (
    <section>
      <h2>Fila de Espera</h2>
      <div className="box">
        <div className="menu">
          <p>Seja bem-vindo! Escolha uma das opções abaixo:</p>
          <button onClick={handleAtendimento}>Iniciar Atendimento</button>
          <button onClick={handleConsultar}>Consultar Paciente</button>
          <button onClick={handleSair}>Sair</button>
        </div>
        <div className="mostrar">
          {atendimento && <Atendimento handleAdicionar={handleAdicionar} />}
          {!atendimento && (
            <>
              {consultar && (
                <p>
                  O paciente {pacienteConsultado} foi consultado
                  <button
                    style={{
                      marginLeft: "3px",
                      width: "15%",
                    }}
                    onClick={() => setConsultar(false)}
                  >
                    OK
                  </button>
                </p>
              )}
              {pacientes.length ? (
                <div>
                  <p>Esta é a fila de espera:</p>
                  <ul>
                    {pacientes.map((paciente, index) => (
                      <li key={index}>
                        {index + 1}º - {paciente}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>Não há pacientes na fila de espera.</p>
              )}
            </>
          )}
          {sair && (
            <>
              <p>Encerrando expediente...</p>
              <p>Programa finalizado!</p>
              <button onClick={resetar}>Reset</button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Ex010;
