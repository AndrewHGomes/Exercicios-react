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
      <h2>Cadastro de Usuário</h2>
      <div className="box">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input
              type="text"
              name="nome"
              value={nome}
              onChange={handleNome}
              placeholder="Ex: José"
            />
          </label>
          <label>
            <span>Sobrenome:</span>
            <input
              type="text"
              name="sobrenome"
              value={sobrenome}
              onChange={handleSobrenome}
              placeholder="Ex: Silva"
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
          <button>Enviar</button>
        </form>
        {mostrar && (
          <div className="mostrar">
            <p>
              Olá, {nome} {sobrenome}!
            </p>
            <p>Você tem {anoAtual - anoNasc} anos.</p>
            <p>Bem-vindo ao curso de {estudo}.</p>
            <button onClick={resetar}>Reset</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Ex001;
