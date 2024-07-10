import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Componente "App" sendo importado
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Aqui é o arquivo responsável por mandar as informações que estão dentro do componente "App" para dentro do "HTML" pela "div" com "id=root"
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
