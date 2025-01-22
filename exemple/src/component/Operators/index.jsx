// path: exemple/src/component/Operators/index.jsx
import "./style.scss";

const Operators = () => {
 
 const operators = [
  {
   sign: "+",
   action: () => {}
  },
  {
   sign: "x",
   action: () => {}
  },
  {
   sign: "-",
   action: () => {}
  },
  {
   sign: "=",
   action: () => {}
  },
  {
   sign: "C",
   action: () => {}
  },
 ]
 
 return (
  <div className="Operators">
   {
    operators.map((obj, i) => <button>{obj.sign}</button>)
   }
  </div>
 )
}

export default Operators