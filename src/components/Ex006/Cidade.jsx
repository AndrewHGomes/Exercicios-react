import React, { useState } from "react";

const Cidade = (props) => {
  const [cidade, setCidade] = useState("");

  const handleCidade = (e) => {
    setCidade(e.target.value);
  };

  return (
    <>
      <label>
        <span>Qual o nome da cidade?</span>
        <input
          type="text"
          name="cidade"
          value={cidade}
          onChange={handleCidade}
        />
      </label>
      <button onClick={() => props.cidades(cidade)}>Salvar</button>
    </>
  );
};

export default Cidade;
