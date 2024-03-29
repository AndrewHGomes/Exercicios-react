import React, { useState } from "react";
import Adicionar from "./Adicionar";

const Ex011 = () => {
  const [adicionar, setAdicionar] = useState(false);
  const [baralho, setBaralho] = useState([]);
  const [cartaPuxada, setCartaPuxada] = useState("");
  const [sair, setSair] = useState(false);

  const handleAdicionar = () => {
    setAdicionar(true);
  };

  const handleBaralho = (carta) => {
    setBaralho((prevBaralho) => [...prevBaralho, carta]);
    setAdicionar(false);
  };

  const handlePuxarCarta = () => {
    setCartaPuxada(baralho[baralho.length - 1]);
    setBaralho((prevBaralho) =>
      prevBaralho.filter((carta, index) => index !== prevBaralho.length - 1)
    );
  };

  const handleSair = () => {
    setSair(true);
  };

  const resetar = () => {
    setSair(false);
  };

  return (
    <section>
      <div className="container">
        <h3>Pilha de Cartas</h3>
        <p>Vamos jogar cartas?</p>
        <p>Escolha uma das opções:</p>
        <button onClick={handleAdicionar}>Adicionar Carta</button>
        <button onClick={handlePuxarCarta}>Puxar Carta</button>
        <button onClick={handleSair}>Sair</button>
      </div>
      <div className="mostrar">
        {adicionar && <Adicionar handleBaralho={handleBaralho} />}
        {!adicionar && (
          <>
            {cartaPuxada && (
              <div>
                <p>Você puxou a carta {cartaPuxada}</p>
                <button onClick={() => setCartaPuxada("")}>OK</button>
              </div>
            )}
            {baralho.length ? (
              <p>Número de cartas no baralho: {baralho.length}.</p>
            ) : (
              <p>Não há cartas no baralho.</p>
            )}
          </>
        )}
        {sair && (
          <>
            <p>Encerrando o Jogo...</p>
            <p>Jogo finalizado!</p>
            <button onClick={resetar}>Reset</button>
          </>
        )}
      </div>
    </section>
  );
};

export default Ex011;
