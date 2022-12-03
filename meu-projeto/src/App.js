import './App.css';
import Form from './components/Form'
import Evento from './components/Evento'
import Pessoa from './components/Pessoa(Props)';

function App() {


  return (
    <div className="App">
    
      <Form/>
      <Evento/>
      <Pessoa 
      nome={'Davi'} idade={'36'} />
      
  

    </div>
  );
}

export default App;
