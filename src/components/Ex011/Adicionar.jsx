import React, { useState } from "react";

const Adicionar = (props) => {
  const [carta, setCarta] = useState("");

  const handleCarta = (e) => {
    setCarta(e.target.value);
  };

  return (
    <>
      <label>
        <span>Qual carta quer adicionar ao baralho?</span>
        <input type="text" name="carta" value={carta} onChange={handleCarta} />
      </label>
      <button onClick={() => props.handleBaralho(carta)}>
        Adicionar ao Baralho
      </button>
    </>
  );
};

export default Adicionar;
