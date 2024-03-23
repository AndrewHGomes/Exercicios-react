import React from "react";

const Opcoes = (props) => {
  return (
    <>
      <p>Olá, {props.usuario}!</p>
      <p>Seu saldo inicial é de: R${Number(props.saldo).toFixed(2)}</p>
      <button onClick={props.handleAbrirDepositar}>Depositar</button>
      <button onClick={props.handleAbrirSacar}>Sacar</button>
      <button onClick={props.handleSair}>Sair</button>
    </>
  );
};

export default Opcoes;
