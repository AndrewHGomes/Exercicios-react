import React, { useState } from "react";

const Ex004 = () => {
  const [numero, setNumero] = useState(0);
  const [medida, setMedida] = useState(0);
  const [mostrar, setMostrar] = useState(false);

  const handleNumero = (e) => {
    setNumero(e.target.value);
  };

  const handleMedida = (e) => {
    setMedida(e.target.value);
  };

  const opcao = () => {
    switch (medida) {
      case "mm":
        return <p>Foi convertido para {numero * 1000} mm.</p>;
      case "cm":
        return <p>Foi convertido para {numero * 100} cm.</p>;
      case "dm":
        return <p>Foi convertido para {numero * 10} dm.</p>;
      case "dam":
        return <p>Foi convertido para {numero / 10} dam.</p>;
      case "hm":
        return <p>Foi convertido para {numero / 100} hm.</p>;
      case "km":
        return <p>Foi convertido para {numero / 1000} km.</p>;
      default:
        return <p>Opção inválida!</p>;
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    setMostrar(true);
  };

  const resetar = () => {
    setMostrar(false);
    setNumero(0);
  };

  return (
    <section>
      <div className="container">
        <h3>Conversor de Medidas</h3>
        <label>
          <span>Digite uma metragem para converter para outra medida:</span>
          <input
            type="number"
            name="numero"
            value={numero}
            onChange={handleNumero}
          />
        </label>
        <label>
          <span>Escolha uma das medidas abaixo:</span>
          <select name="medida" value={medida} onChange={handleMedida}>
            <option value="mm">Milímetros</option>
            <option value="cm">Centímetros</option>
            <option value="dm">Decímetros</option>
            <option value="dam">Decâmetros</option>
            <option value="hm">Hectômetros</option>
            <option value="km">Quilômetros</option>
          </select>
        </label>
        <button onClick={handleSubmit}>Converter</button>
      </div>
      <div className="mostrar">
        {mostrar && (
          <>
            <p>Você digitou {numero} metros...</p>
            {opcao()}
            <button onClick={resetar}>Reset</button>
          </>
        )}
      </div>
    </section>
  );
};

export default Ex004;
