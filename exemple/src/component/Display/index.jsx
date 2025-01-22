// path: exemple/src/component/Display/index.jsx
import "./style.scss";
import {useCalcContext} from "../../context/CalcContext.jsx";

const Display = () => {
 
 const [state] = useCalcContext()
 const {display} = state
 
 return (
  <div className="Display">
    <span>{display || 0}</span>
  </div>
 )
}

export default Display