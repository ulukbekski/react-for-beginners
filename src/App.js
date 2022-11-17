import {React, useState , useEffect} from "react";
import './index.scss'
import { ImArrowRight2 } from 'react-icons/im'


const fruits = ['яблоко','банан','ананас','кокос','вишня','персик','лимон']

function App() {

  return(
    <div className="App">
      <h1>Создай логику программы которая будет перебирать следующий элемент из списка</h1>

      <ul >
        <li>{fruits[0]}</li>
      </ul>

     <button >next <ImArrowRight2 className="icon"/> </button> 

    </div>
  )
}

export default App;