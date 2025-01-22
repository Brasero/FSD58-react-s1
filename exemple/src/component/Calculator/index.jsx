import Inputs from "../Inputs/index.jsx";
import Buttons from "../Buttons/index.jsx";
import Display from "../Display/index.jsx";
import useCalculatorReducer from "../../reducer/useCalculatorReducer.jsx";
import {useEffect, useState} from "react";

const Calculator = () => {
 
 const [state, dispatch] = useCalculatorReducer()
 const [message, setMessage] = useState("")
 
 
 useEffect(() => {
  if (state.count%10 === 0) {
   setMessage("Vous avez effectué 10 calculs")
  } else {
   setMessage("")
  }
 }, [state.count])
 
 return <>
  {
   state.error !== "" && <p style={{color: "red"}}>{state.error}</p>
  }
  <Display result={state.result} message={message} />
  <Inputs state={state} dispatch={dispatch} />
  <br/>
  <Buttons dispatch={dispatch} />
 </>
}

export default Calculator;