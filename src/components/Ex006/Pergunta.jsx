import React from "react";

const Pergunta = (props) => {
  return (
    <>
      <span>Você já visitou alguma cidade?</span>
      <div style={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
        <button onClick={props.sim}>Sim</button>
        <button onClick={props.nao}>Não</button>
      </div>
    </>
  );
};

export default Pergunta;
