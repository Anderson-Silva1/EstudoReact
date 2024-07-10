import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayNyName from './components/SayMyName'; // Importando o componente "SayMyName"
import Pessoa from './components/Pessoa'; // Importando o componente "Pessoa"

function App() {
  return (
    <>
      <HelloWorld />
      <SayNyName name="Anderson" /* Estamos usando a Props criada "Name" como um atributo da tag Paragrafo para colocar um valor nela, e assim fizemos paratodas as outras tags "SayMyName" */ />
      <SayNyName name="Rafaela" />
      <SayNyName name="Matheus" />
      <SayNyName name="Joana" />

      <Pessoa foto="https://via.placeholder.com/150" name="Anderson" anos="19" profissao="Desenvolvedor Web" /* Aqui estamos usando vários props */ />
      <Pessoa foto="https://via.placeholder.com/150" name="Rafaela" anos="24" profissao="Designer Grafico" />
    </>
  );
}

export default App;
