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
      <h2>Visitando Novas Cidades</h2>
      <div className="box">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Olá, turista! Insira seu nome:</span>
            <input
              type="text"
              name="turista"
              value={turista}
              onChange={handleTurista}
              placeholder="Ex: José"
            />
          </label>
          <button>Verificar</button>
        </form>
        {mostrarPerg && (
          <div className="mostrar">
            <Pergunta sim={handleClickSim} nao={handleClickNao} />
          </div>
        )}
        {mostrarInput && (
          <div className="mostrar">
            <Cidade cidades={handleCidades} />
          </div>
        )}
        {mostrarResp && (
          <div className="mostrar">
            <p>Turista: {turista}</p>
            <p>Quantidade de cidades visitadas: {cidades.length}</p>
            <p>Cidades visitadas:</p>
            <ul style={{ listStyle: "none" }}>
              {cidades.map((cidade, index) => (
                <li key={index}>{cidade}</li>
              ))}
            </ul>
            <button onClick={resetar}>Reset</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Ex006;
