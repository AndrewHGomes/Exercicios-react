import React, { useState } from "react";

const Ex008 = () => {
  const [numero, setNumero] = useState(0);
  const [tabuada, setTabuada] = useState([]);
  const [mostrar, setMostrar] = useState(false);

  const handleNumero = (e) => {
    setTabuada([]);
    setNumero(e.target.value);
  };

  const fazerTabuada = () => {
    setTabuada([]);
    for (let i = 1; i <= 10; i++) {
      setTabuada((prevTabuada) => [...prevTabuada, numero * i]);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    fazerTabuada();

    setMostrar(true);
  };

  const resetar = () => {
    setMostrar(false);
    setNumero(0);
  };

  return (
    <section>
      <h2>Robô da Tabuada</h2>
      <div className="box">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Digite um número para vermos sua tabuada:</span>
            <input
              type="number"
              name="numero"
              value={numero}
              onChange={handleNumero}
            />
          </label>
          <button>Tabuada</button>
        </form>
        {mostrar && (
          <div className="mostrar">
            <p>Esta é a tabuada do {numero}:</p>
            <ul>
              {tabuada.map((tab, index) => (
                <li key={index}>
                  {numero} x {index + 1} = {tab}
                </li>
              ))}
            </ul>
            <button onClick={resetar}>Reset</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Ex008;
