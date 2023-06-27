import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './aula15 router/Home'
import Empresa from './aula15 router/Empresa'
import Contato from './aula15 router/Contato'
import Navbar from './aula15 router/layout/Navbar'
import Footer from './aula15 router/layout/Footer'

import  HelloWorld  from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa(Props)'

function App() {
 
  return (
    <>
     
      <Pessoa
      nome="Leal"
      idade="36"
      estado="Casado"/>
    </>
  )
}

export default App
