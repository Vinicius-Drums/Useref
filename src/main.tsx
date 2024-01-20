// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";

// Renderiza o componente principal App dentro do elemento com id "root"
ReactDOM.createRoot(document.getElementById("root")!).render(
  // Utiliza React.StrictMode para verificar e alertar sobre práticas inseguras durante o desenvolvimento
  <React.StrictMode>
    {/* Renderiza o componente principal da aplicação */}
    <App />
  </React.StrictMode>
);
