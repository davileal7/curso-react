import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  var nome = "Naara"
  
  return (
    <div className="App">
  
      <SayMyName nome="Davi"/>
      <SayMyName nome="João"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Rafael" 
      idade="30" 
      profissao="Programador" 
      foto="https://via.placeholder.com/150" />

    </div>
  );
}

export default App;
