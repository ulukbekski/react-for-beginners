import {React} from "react";
import { ImArrowRight2 } from 'react-icons/im'

const fruits = ['яблоко','банан','ананас','кокос','вишня','персик','лимон']

function App() {
  return(
    <div className="App">
      <ul >
        <li>{fruits[0]}</li>
      </ul>
     <button >next <ImArrowRight2 className="icon"/> </button> 
    </div>
  )
}

export default App;