import React, { useState } from "react";

const Ex005 = () => {
  const [atacante, setAtacante] = useState("");
  const [ataque, setAtaque] = useState(0);
  const [defensor, setDefensor] = useState("");
  const [defesa, setDefesa] = useState(0);
  const [vida, setVida] = useState(0);
  const [escudo, setEscudo] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const handleAtacante = (e) => {
    setAtacante(e.target.value);
  };

  const handleAtaque = (e) => {
    setAtaque(e.target.value);
  };

  const handleDefensor = (e) => {
    setDefensor(e.target.value);
  };

  const handleDefesa = (e) => {
    setDefesa(e.target.value);
  };

  const handleVida = (e) => {
    setVida(e.target.value);
  };

  const handleEscudo = (e) => {
    setEscudo(e.target.value);
  };

  const jogar = () => {
    let valor = 0;
    if (Number(ataque) > Number(defesa) && escudo === "Não") {
      valor = ataque - defesa;
    } else if (Number(ataque) > Number(defesa) && escudo === "Sim") {
      valor = (ataque - defesa) / 2;
    }

    return valor;
  };

  const atribuirDano = (dano) => {
    setVida((prevVida) => prevVida - dano);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const dano = jogar();

    atribuirDano(dano);

    setMostrar(true);
  };

  const resetar = () => {
    setAtacante("");
    setAtaque(0);
    setDefensor("");
    setDefesa(0);
    setVida(0);
    setEscudo("");
    setMostrar(false);
  };

  return (
    <section>
      <div className="container">
        <h3>Cálculo de Dano</h3>
        <label>
          <span>Nome do jogador atacante:</span>
          <input
            type="text"
            name="atacante"
            value={atacante}
            onChange={handleAtacante}
          />
        </label>
        <label>
          <span>Poder de ataque:</span>
          <input
            type="number"
            name="ataque"
            value={ataque}
            onChange={handleAtaque}
          />
        </label>
        <label>
          <span>Nome do jogador defensor:</span>
          <input
            type="text"
            name="defensor"
            value={defensor}
            onChange={handleDefensor}
          />
        </label>
        <label>
          <span>Poder de defesa:</span>
          <input
            type="number"
            name="defesa"
            value={defesa}
            onChange={handleDefesa}
          />
        </label>
        <label>
          <span>Pontos de vida:</span>
          <input type="number" name="vida" value={vida} onChange={handleVida} />
        </label>
        <label>
          <span>Possui escudo?</span>
          <input
            type="text"
            name="escudo"
            value={escudo}
            onChange={handleEscudo}
          />
        </label>
        <button onClick={handleSubmit}>Jogar</button>
      </div>
      <div className="mostrar">
        {mostrar && (
          <>
            <p>Jogador atacante: {atacante}.</p>
            <p>Poder de ataque: {ataque} pontos.</p>
            <p>Jogador defensor: {defensor}.</p>
            <p>Poder de defesa: {defesa} pontos.</p>
            <p>Pontos de vida: {vida} pontos.</p>
            <p>Possui escudo? {escudo}.</p>
            <p>Foi causado {jogar()} pontos de dano.</p>
            <button onClick={resetar}>Reset</button>
          </>
        )}
      </div>
    </section>
  );
};

export default Ex005;
