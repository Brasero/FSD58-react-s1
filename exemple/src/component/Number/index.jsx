// path: exemple/src/component/Number/index.jsx
import "./style.scss";

const Number = ({num}) => {
 
 return (
  <button className="Number">
   {num}
  </button>
 )
}

export default Number