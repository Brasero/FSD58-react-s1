// path: exemple/src/component/Operators/index.jsx
import "./style.scss";
import {useCalcContext} from "../../context/CalcContext.jsx";

const Operators = () => {
 
 const [state, dispatch] = useCalcContext()
 
 const operators = [
  {
   sign: "+",
   action: () => {
    dispatch({
     type: "SET_OPERATOR",
     payload: "+"
    })
   }
  },
  {
   sign: "x",
   action: () => {
    dispatch({
     type: "SET_OPERATOR",
     payload: "*"
    })
   }
  },
  {
   sign: "-",
   action: () => {
    dispatch({
     type: "SET_OPERATOR",
     payload: "-"
    })
   }
  },
  {
   sign: "=",
   action: () => {
    dispatch({
     type: "CALC"
    })
   }
  },
  {
   sign: "C",
   action: () => {
    dispatch({
     type: "RESET"
    })
   }
  },
 ]
 
 return (
  <div className="Operators">
   {
    operators.map((obj, i) => <button key={i} onClick={obj.action}>{obj.sign}</button>)
   }
  </div>
 )
}

export default Operators