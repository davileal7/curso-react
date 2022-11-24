import './App.css';
import HelloWorld from './components/HelloWorld'

function App() {

  const name = 'Davi'
  const newName = name.toUpperCase()

  function sum(a,b) {
    return a + b
    
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>Meu primeiro App</p>
      <p>Oi {name}</p>
      <p>Outra opção {newName}</p>
      <p>Soma: {sum(1,2)}</p>
      <img src={url} alt="Minha imgem"/>
      <HelloWorld/>
      
      
      

    </div>
  );
}

export default App;
