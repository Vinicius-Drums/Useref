// Useref.tsx
import React, { useRef } from "react";
import vendasOnlineImage from "../Imagens/Vendasonline.jpg";
import "../App.css";

// Componente funcional Useref que utiliza um input de número não controlado
const Useref: React.FC = () => {
  // Criar uma referência (useRef) para o input
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Função para exibir um alerta com o valor do input
  const exibirAlerta = () => {
    // Verificar se a referência do input não é nula antes de acessar o valor
    if (inputRef.current) {
      const valorInput = inputRef.current.value;
      // Exibir um alerta com o valor inserido pelo usuário
      alert(`Valor inserido: ${valorInput}`);
    }
  };

  return (
    <>
      {/* Título indicando a ação que o usuário deve realizar */}
      <h1 className="title">Adicione a quantidade de produtos</h1>
      {/* Contêiner que envolve o input, botão e imagem */}
      <div className="useref-container">
        {/* Input de número não controlado com referência */}
        <input type="number" ref={inputRef} className="useref-input" />
        {/* Botão que, ao ser clicado, chama a função para exibir o alerta */}
        <button className="useref-button" onClick={exibirAlerta}>
          Exibir
        </button>
        {/* Imagem "Vendas Online" */}
        <img
          src={vendasOnlineImage}
          alt="Vendas Online"
          className="useref-image"
        />
      </div>
    </>
  );
};

export default Useref;
