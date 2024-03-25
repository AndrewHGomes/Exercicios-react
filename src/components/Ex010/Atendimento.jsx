import React, { useState } from "react";

const Atendimento = () => {
  const [paciente, setPaciente] = useState("");

  const handlePaciente = (e) => {
    setPaciente(e.target.value);
  };

  return (
    <>
      <label>
        <span>Insira o nome do paciente:</span>
        <input
          type="text"
          name="paciente"
          value={paciente}
          onChange={handlePaciente}
        />
      </label>
      <button>Adicionar</button>
    </>
  );
};

export default Atendimento;
