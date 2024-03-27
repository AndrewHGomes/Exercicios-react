import React from "react";

const Pergunta = (props) => {
  return (
    <>
      <span>Você já visitou alguma cidade?</span>
      <button onClick={props.sim}>Sim</button>
      <button onClick={props.nao}>Não</button>
    </>
  );
};

export default Pergunta;
