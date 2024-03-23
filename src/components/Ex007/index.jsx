import React, { useState } from "react";
import Opcoes from "./Opcoes";
import Depositar from "./Depositar";
import Sacar from "./Sacar";

const Ex007 = () => {
  const [usuario, setUsuario] = useState("");
  const [saldo, setSaldo] = useState(0);
  const [opcoes, setOpcoes] = useState(false);
  const [abrirDepositar, setAbrirDepositar] = useState(false);
  const [abrirSacar, setAbrirSacar] = useState(false);
  const [sair, setSair] = useState(false);

  const handleUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const handleSaldo = (e) => {
    setSaldo(e.target.value);
  };

  const handleAbrirDepositar = () => {
    setOpcoes(false);
    setAbrirDepositar(true);
  };

  const handleDepositar = (deposito) => {
    setOpcoes(true);
    setAbrirDepositar(false);
    setSaldo((prevSaldo) => Number(prevSaldo) + Number(deposito));
  };

  const handleAbrirSacar = () => {
    setOpcoes(false);
    setAbrirSacar(true);
  };

  const handleSacar = (saque) => {
    setOpcoes(true);
    setAbrirSacar(false);
    setSaldo((prevsaldo) => Number(prevsaldo) - saque);
  };

  const handleSair = () => {
    setOpcoes(false);
    setSair(true);
  };

  const handlesubmit = (ev) => {
    ev.preventDefault();
    setOpcoes(true);
  };

  const resetar = () => {
    setSair(false);
    setUsuario("");
    setSaldo(0);
  };

  return (
    <section>
      <h2>Controle Financeiro</h2>
      <div className="box">
        <form onSubmit={handlesubmit}>
          <label>
            <span>Nome do Usuário:</span>
            <input
              type="text"
              name="usuario"
              value={usuario}
              onChange={handleUsuario}
            />
          </label>
          <label>
            <span>Saldo Disponível:</span>
            <input
              type="number"
              name="saldo"
              value={saldo}
              onChange={handleSaldo}
            />
          </label>
          <button>Iniciar</button>
        </form>
        {opcoes && (
          <div className="mostrar">
            <Opcoes
              usuario={usuario}
              saldo={saldo}
              handleAbrirDepositar={handleAbrirDepositar}
              handleAbrirSacar={handleAbrirSacar}
              handleSair={handleSair}
            />
          </div>
        )}
        {abrirDepositar && (
          <div className="mostrar">
            <Depositar handleDepositar={handleDepositar} />
          </div>
        )}
        {abrirSacar && (
          <div className="mostrar">
            <Sacar handleSacar={handleSacar} />
          </div>
        )}
        {sair && (
          <div className="mostrar">
            <p>Obrigado por escolher os nossos serviços.</p>
            <p>Seu saldo final é de R${Number(saldo).toFixed(2)}.</p>
            <p>Programa finalizado!</p>
            <button onClick={resetar}>Reset</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Ex007;
