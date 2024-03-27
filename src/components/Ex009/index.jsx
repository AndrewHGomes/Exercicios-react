import React, { useState } from "react";

const Ex009 = () => {
  const [palavra, setPalavra] = useState("");
  const [invertida, setInvertida] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const handlePalavra = (e) => {
    setPalavra(e.target.value);
  };

  const inverter = () => {
    setInvertida(palavra.split("").reverse().join(""));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    inverter();

    setMostrar(true);
  };

  const resetar = () => {
    setPalavra("");
    setMostrar(false);
  };

  return (
    <section>
      <div className="container">
        <h3>Procurando Palíndromos</h3>
        <label>
          <span>Digite uma palavra para vermos se é um Palíndromo:</span>
          <input
            type="text"
            name="palavra"
            value={palavra}
            onChange={handlePalavra}
          />
        </label>
        <button onClick={handleSubmit}>Verificar</button>
      </div>
      <div className="mostrar">
        {mostrar && (
          <>
            <p>Você digitou a palavra: {palavra}</p>
            <p>Palavra invertida: {invertida}</p>
            <p>É um Palíndromo? {palavra === invertida ? "SIM" : "NÃO"}</p>
            <button onClick={resetar}>Reset</button>
          </>
        )}
      </div>
    </section>
  );
};

export default Ex009;
