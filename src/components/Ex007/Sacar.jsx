import React, { useState } from "react";

const Sacar = (props) => {
  const [saque, setSaque] = useState(0);

  const handleSaque = (e) => {
    setSaque(e.target.value);
  };

  return (
    <>
      <label>
        <span>Quanto você deseja sacar?</span>
        <input
          type="number"
          name="saque"
          value={saque}
          onChange={handleSaque}
        />
      </label>
      <button onClick={() => props.handleSacar(saque)}>Sacar</button>
    </>
  );
};

export default Sacar;
