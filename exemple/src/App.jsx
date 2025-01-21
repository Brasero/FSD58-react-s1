import './App.css';
import {useEffect, useReducer, useState} from "react";
import useCountReducer from "./reducer/useCountReducer.jsx";

// {
//  type: "",
//  payload: {}
// }


function App() {
 
 const [state, dispatch] = useCountReducer();
 
 const [count, setCount] = useState(0)
 const [count2, setCount2] = useState(0);
 
 useEffect(() => {
  console.log("J'ai changé d'état de vie")
 }, []);
 
 useEffect(() => {
  console.log(`La valeur de count a changé ${count}`)
 }, [count])
 
 useEffect(() => {
  console.log("L'un des deux state à changer")
 }, [count, count2])
 
 useEffect(() => {
  return () => {
   console.log("je démonte")
  }
 }, []);
 
 
 
 
 return (<>
  <button onClick={() => setCount(count + 1)}>Increment 1</button>
  <button onClick={() => setCount2(count2+1)}>Increment 2</button>
  
  <div>
   {state.count}
   <button onClick={() => dispatch({type: "increment", payload: 1})}>+1</button>
   <button onClick={() => dispatch({type: "decrement", payload: 1})}>-1</button>
   <button onClick={() => dispatch({type: "increment", payload: 10})}>+10</button>
   <button onClick={() => dispatch({type: "decrement", payload: 10})}>-10</button>
  </div>
  </>)
}

export default App