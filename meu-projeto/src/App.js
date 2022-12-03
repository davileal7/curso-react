import './App.css';
import Form from './components/Form'
import Evento from './components/Evento'
import Pessoa from './components/Pessoa(Props)';
import List from './components/List(Fragmentos)';
import Item from './components/Item(Fragmentos)';

function App() {


  return (
    <div className="App">
    
      
      <Pessoa
      foto={'https://via.placeholder.com/150'} 
      nome={'Davi'} 
      idade={'36'} 
      profissao={'programador'}/>
      

      <List />
      <Item marca="Celta" />
      
  

    </div>
  );
}

export default App;
