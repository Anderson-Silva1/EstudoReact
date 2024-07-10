import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'; // Componente "HelloWorld" sendo importado 

// Esse é nosso componente principal, onde os outros componentes serão importados aqui para ele de colocado dentro da Função App()

function App() {
  return (
    // Conteúdo do nosso componente "App"
    <>
      <HelloWorld />
    </>
    // Onde nosso componente "HelloWorld" que foi importado está sendo usado
  );
}

export default App; // Componente App sendo exportado
