import React, { useState } from "react";

const Ex002 = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [mostrar, setMostrar] = useState(false);

  const handleNum1 = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2 = (e) => {
    setNum2(e.target.value);
  };

  const soma = (a, b) => {
    return Number(a) + Number(b);
  };

  const sub = (a, b) => {
    return Number(a) - Number(b);
  };

  const mult = (a, b) => {
    return Number(a) * Number(b);
  };

  const div = (a, b) => {
    return Number(a) / Number(b);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    setMostrar(true);
  };

  const resetar = () => {
    setNum1(0);
    setNum2(0);
    setMostrar(false);
  };

  return (
    <section>
      <div className="container">
        <h3>Calculadora Simples</h3>
        <label>
          <span>Insira o 1º número:</span>
          <input type="number" name="num1" value={num1} onChange={handleNum1} />
        </label>
        <label>
          <span>Insira o 2º número:</span>
          <input type="number" name="num2" value={num2} onChange={handleNum2} />
        </label>
        <button onClick={handleSubmit}>Calcular</button>
      </div>
      <div className="mostrar">
        {mostrar && (
          <>
            <p>
              {" "}
              SOMA: {num1} + {num2} = {soma(num1, num2)}
            </p>
            <p>
              SUBTRAÇÃO: {num1} - {num2} = {sub(num1, num2)}
            </p>
            <p>
              MULTIPLICAÇÃO: {num1} x {num2} = {mult(num1, num2)}
            </p>
            <p>
              DIVISÃO: {num1} : {num2} = {div(num1, num2)}
            </p>
            <button onClick={resetar}>Reset</button>
          </>
        )}
      </div>
    </section>
  );
};

export default Ex002;
