import './App.css'
import Counter from "./component/Counter.jsx";

function App() {
 
 return (<>
  <Counter />
  <Counter step={2} maxValue={6} />
  </>)
}

export default App