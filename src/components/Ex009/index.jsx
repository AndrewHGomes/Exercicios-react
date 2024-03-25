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
      <h2>Procurando Palíndromos</h2>
      <div className="box">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Digite uma palavra para vermos se é um Palíndromo:</span>
            <input
              type="text"
              name="palavra"
              value={palavra}
              onChange={handlePalavra}
              placeholder="Ex: bola"
            />
          </label>
          <button>Verificar</button>
        </form>
        {mostrar && (
          <div className="mostrar">
            <p>Você digitou: {palavra}</p>
            <p>Palavra invertida: {invertida}</p>
            <p>É um Palíndrmo? {palavra === invertida ? "SIM" : "Não"}</p>
            <button onClick={resetar}>Reset</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Ex009;
