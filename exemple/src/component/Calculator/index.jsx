// path: exemple/src/component/Calculator/index.jsx
import "./style.scss";
import Display from "../Display/index.jsx";
import Numbers from "../Numbers/index.jsx";
import Operators from "../Operators/index.jsx";
import useCalcutorReducer from "../../reducer/useCalcutorReducer.jsx";

const Calculator = () => {
 
 const [state, dispatch] = useCalcutorReducer()
 
 return (
  <div className="Calculator">
   <Display display={state.display} />
   <Numbers dispatch={dispatch} />
   <Operators dispatch={dispatch} />
  </div>
 )
}

export default Calculator