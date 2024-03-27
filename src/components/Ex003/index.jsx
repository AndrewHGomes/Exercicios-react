import React, { useState } from "react";

const Ex003 = () => {
  const [car1, setCar1] = useState("");
  const [vel1, setVel1] = useState(0);
  const [car2, setCar2] = useState("");
  const [vel2, setVel2] = useState(0);
  const [mostrar, setMostrar] = useState(false);

  const handleCar1 = (e) => {
    setCar1(e.target.value);
  };

  const handleVel1 = (e) => {
    setVel1(e.target.value);
  };

  const handleCar2 = (e) => {
    setCar2(e.target.value);
  };

  const handleVel2 = (e) => {
    setVel2(e.target.value);
  };

  const testar = () => {
    if (Number(vel1) > Number(vel2)) {
      return (
        <p>
          {car1}({vel1}km/h) está mais rápido que {car2}({vel2}km/h).
        </p>
      );
    } else if (Number(vel1) < Number(vel2)) {
      return (
        <p>
          {car2}({vel2}km/h) está mais rápido que {car1}({vel1}km/h).
        </p>
      );
    } else {
      return <p>Ambos estão na mesma velocidade({vel1}km/h).</p>;
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    setMostrar(true);
  };

  const resetar = () => {
    setCar1("");
    setVel1(0);
    setCar2("");
    setVel2(0);

    setMostrar(false);
  };

  return (
    <section>
      <div className="container">
        <h3>Teste de Velocidade</h3>
        <label>
          <span>Insira o nome do 1º veículo:</span>
          <input type="text" name="car1" value={car1} onChange={handleCar1} />
        </label>
        <label>
          <span>Velocidade do 1º veículo:</span>
          <input type="number" name="vel1" value={vel1} onChange={handleVel1} />
        </label>
        <label>
          <span>Insira o nome do 2º veículo:</span>
          <input type="text" name="car2" value={car2} onChange={handleCar2} />
        </label>
        <label>
          <span>Velocidade do 2º veículo:</span>
          <input type="number" name="vel2" value={vel2} onChange={handleVel2} />
        </label>
        <button onClick={handleSubmit}>Testar</button>
      </div>
      <div className="mostrar">
        {mostrar && (
          <>
            {testar()}
            <button onClick={resetar}>Reset</button>
          </>
        )}
      </div>
    </section>
  );
};

export default Ex003;
