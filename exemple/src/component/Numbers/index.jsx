// path: exemple/src/component/Numbers/index.jsx
import "./style.scss";
import Number from "../Number/index.jsx";

const Numbers = ({dispatch}) => {
 
    const numbersArray = Array(10).fill("");
    
 return (
  <div className="Numbers">
      {
          numbersArray.map((_, i) => <Number dispatch={dispatch} key={i} num={9-i} />)
      }
  </div>
 )
}

export default Numbers