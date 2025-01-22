// path: exemple/src/component/Number/index.jsx
import "./style.scss";

const Number = ({num, dispatch}) => {
 
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