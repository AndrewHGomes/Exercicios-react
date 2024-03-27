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

  const handleSubmit = (ev) => {
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
      <div className="container">
        <h3>Controle Financeiro</h3>
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
        <button onClick={handleSubmit}>Iniciar</button>
      </div>
      <div className="mostrar">
        {opcoes && (
          <Opcoes
            usuario={usuario}
            saldo={saldo}
            handleAbrirDepositar={handleAbrirDepositar}
            handleAbrirSacar={handleAbrirSacar}
            handleSair={handleSair}
          />
        )}
        {abrirDepositar && <Depositar handleDepositar={handleDepositar} />}
        {abrirSacar && <Sacar handleSacar={handleSacar} />}
        {sair && (
          <>
            <p>Obrigado por escolher os nossos serviços.</p>
            <p>Seu saldo final é de R${Number(saldo).toFixed(2)}.</p>
            <p>Programa finalizado!</p>
            <button onClick={resetar}>Reset</button>
          </>
        )}
      </div>
    </section>
  );
};

export default Ex007;
