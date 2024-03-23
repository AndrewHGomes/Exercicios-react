import React, { useState } from "react";

const Depositar = (props) => {
  const [deposito, setDeposito] = useState(0);

  const handleDeposito = (e) => {
    setDeposito(e.target.value);
  };

  return (
    <>
      <label>
        <span>Quanto você deseja depositar?</span>
        <input
          type="number"
          name="deposito"
          value={deposito}
          onChange={handleDeposito}
        />
      </label>
      <button onClick={() => props.handleDepositar(deposito)}>Depositar</button>
    </>
  );
};

export default Depositar;
