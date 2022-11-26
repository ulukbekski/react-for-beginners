
import './index.scss'
const massiv = [19,28,37,47,57,66,75,84,96,1]
function App() {
  
  return (
    <div className="App">
      <ul>
      {massiv.map(elem => <li>{elem}</li>)}
      </ul>
    
    </div>
  );
}

export default App;
