import React, { useState } from "react";
import Cadastrar from "./Cadastrar";

const Ex012 = () => {
  const [cadastrar, setCadastrar] = useState(false);
  const [imoveis, setImoveis] = useState([]);
  const [cadastrados, setCadastrados] = useState(false);
  const [encerrar, setEncerrar] = useState(false);
  const [count, setCount] = useState(0);

  const handleCadastrar = () => {
    setCadastrar(true);
  };

  const handleImoveis = (imovel) => {
    setImoveis((prevImoveis) => [...prevImoveis, imovel]);
    setCadastrar(false);
  };

  const handleCadastrados = () => {
    setCadastrados(true);
  };

  const handleCount = () => {
    if (count < imoveis.length - 1) {
      setCount((prevCount) => prevCount + 1);
    } else {
      setCadastrados(false);
      setCount(0);
    }
  };

  return (
    <section>
      <div className="container">
        <h3>Cadastro de Imóveis</h3>
        <p>Seja bem-vindo ao cadastro de imóvies!</p>
        <p>Escolha uma das opções abaixo:</p>
        <button onClick={handleCadastrar}>Cadastrar Imóvel</button>
        <button onClick={handleCadastrados}>Imóveis Cadastrados</button>
        <button onClick={() => setEncerrar(true)}>Encerrar</button>
      </div>
      <div className="mostrar">
        {cadastrar && <Cadastrar handleImoveis={handleImoveis} />}
        {imoveis.length ? (
          <p>Quantidade de imóveis cadastrados: {imoveis.length}</p>
        ) : (
          <p>Não há imóvies cadastrados.</p>
        )}
        {cadastrados && (
          <>
            <p>{count + 1}º imóvel:</p>
            <p>Nome do proprietário: {imoveis[count].proprietario}</p>
            <p>Número de quartos: {imoveis[count].quartos}</p>
            <p>Número de banheiros: {imoveis[count].banheiros}</p>
            <p>Tem garagem: {imoveis[count].garagem}</p>
            <button onClick={handleCount}>OK</button>
          </>
        )}
        {encerrar && (
          <>
            <p>Encerrando aplicação...</p>
            <p>Programa finalizado!</p>
            <button onClick={() => setEncerrar(false)}>Reset</button>
          </>
        )}
      </div>
    </section>
  );
};

export default Ex012;
