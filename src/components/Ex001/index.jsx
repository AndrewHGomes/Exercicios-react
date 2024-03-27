import React, { useState } from "react";

const Ex001 = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [anoNasc, setAnoNasc] = useState(0);
  const [estudo, setEstudo] = useState("");
  const [mostrar, setMostrar] = useState(false);
  const anoAtual = new Date().getFullYear();

  const handleNome = (e) => {
    setNome(e.target.value);
  };

  const handleSobrenome = (e) => {
    setSobrenome(e.target.value);
  };

  const handleAnoNasc = (e) => {
    setAnoNasc(e.target.value);
  };

  const handleEstudo = (e) => {
    setEstudo(e.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    setMostrar(true);
  };

  const resetar = () => {
    setNome("");
    setSobrenome("");
    setAnoNasc(0);
    setEstudo("");
    setMostrar(false);
  };

  return (
    <section>
      <div className="container">
        <h3>Cadastro de Usuário</h3>
        <label>
          <span>Insira seu nome:</span>
          <input type="text" name="nome" value={nome} onChange={handleNome} />
        </label>
        <label>
          <span>Insira seu sobrenome:</span>
          <input
            type="text"
            name="sobrenome"
            value={sobrenome}
            onChange={handleSobrenome}
          />
        </label>
        <label>
          <span>Ano de Nascimento:</span>
          <input
            type="number"
            name="anoNasc"
            value={anoNasc}
            onChange={handleAnoNasc}
          />
        </label>
        <label>
          <span>Área de Estudo:</span>
          <input
            type="text"
            name="estudo"
            value={estudo}
            onChange={handleEstudo}
          />
        </label>
        <button onClick={handleSubmit}>Enviar</button>
      </div>
      <div className="mostrar">
        {mostrar && (
          <>
            <p>
              Olá, {nome} {sobrenome}!
            </p>
            <p>Você tem {anoAtual - anoNasc} anos de idade.</p>
            <p>Bem-vindo ao curso de {estudo}.</p>
            <button onClick={resetar}>Reset</button>
          </>
        )}
      </div>
    </section>
  );
};

export default Ex001;
