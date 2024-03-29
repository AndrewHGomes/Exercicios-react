import React, { useState } from "react";

const Cadastrar = (props) => {
  const [imovel, setImovel] = useState({});

  const handleImovel = (e) => {
    const { value, name } = e.target;
    setImovel((prevImovel) => ({ ...prevImovel, [name]: value }));
  };

  return (
    <>
      <label>
        <span>Nome do Proprietário:</span>
        <input type="text" name="proprietario" onChange={handleImovel} />
      </label>
      <label>
        <span>Quantidade de quartos:</span>
        <input type="number" name="quartos" onChange={handleImovel} />
      </label>
      <label>
        <span>Quantidade de banheiros:</span>
        <input type="number" name="banheiros" onChange={handleImovel} />
      </label>
      <label>
        <span>Tem garagem?</span>
        <input type="text" name="garagem" onChange={handleImovel} />
      </label>
      <button onClick={() => props.handleImoveis(imovel)}>Salvar imóvel</button>
    </>
  );
};

export default Cadastrar;
