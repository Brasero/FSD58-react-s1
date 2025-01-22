// path: exemple/src/component/Number/index.jsx
import "./style.scss";
import { useCalcContext} from "../../context/CalcContext.jsx";

const Number = ({num}) => {
 
 const [state, dispatch] = useCalcContext()
 
 const handleClick = () => {
  dispatch({
   type: "SET_VALUE",
   payload: num
  })
 }
 
 return (
  <button onClick={handleClick} className="Number">
   {num}
  </button>
 )
}

export default Number