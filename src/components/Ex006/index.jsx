import React, { useState } from "react";
import Pergunta from "./Pergunta";
import Cidade from "./Cidade";

const Ex006 = () => {
  const [turista, setTurista] = useState("");
  const [mostrarPerg, setMostrarPerg] = useState(false);
  const [mostrarInput, setMostrarInput] = useState(false);
  const [cidades, setCidades] = useState([]);
  const [mostrarResp, setMostrarResp] = useState(false);

  const handleTurista = (e) => {
    setTurista(e.target.value);
  };

  const handleClickSim = () => {
    setMostrarInput(true);
    setMostrarPerg(false);
  };

  const handleClickNao = () => {
    setMostrarResp(true);
    setMostrarPerg(false);
  };

  const handleCidades = (cidade) => {
    setCidades((prevCidades) => [...prevCidades, cidade]);
    setMostrarInput(false);
    setMostrarPerg(true);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setMostrarPerg(true);
  };

  const resetar = () => {
    setMostrarResp(false);
    setTurista("");
  };

  return (
    <section>
      <div className="container">
        <h3>Visitando Novas Cidades</h3>
        <label>
          <span>Olá, turista! Insira seu nome:</span>
          <input
            type="text"
            name="turista"
            value={turista}
            onChange={handleTurista}
          />
        </label>
        <button onClick={handleSubmit}>Verificar</button>
      </div>
      <div className="mostrar">
        {mostrarPerg && <Pergunta sim={handleClickSim} nao={handleClickNao} />}
        {mostrarInput && <Cidade cidades={handleCidades} />}
        {mostrarResp && (
          <>
            <p>Turista: {turista}</p>
            <p>Quantidade de cidades visitadas: {cidades.length}</p>
            <p>Cidades visitadas:</p>
            <ul>
              {cidades.map((cidade, index) => (
                <li key={index}>{cidade}</li>
              ))}
            </ul>
            <button onClick={resetar}>Reset</button>
          </>
        )}
      </div>
    </section>
  );
};

export default Ex006;
