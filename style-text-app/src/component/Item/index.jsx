// path: style-text-app/src/component/Item/index.jsx
import "./style.scss";
import useTextContext from "../../context/textContext.jsx";

const Item = ({text}) => {
 
 const {removeText} = useTextContext();
 
 const handleClick = () => {
  removeText(text.id);
 }
 
 return (
  <div className="Item">
   <p className="Item__content" style={{color: text.color, fontSize: `${text.size}px`}}>{text.content}</p>
   <button onClick={handleClick} style={{backgroundColor: "red"}}>
    Remove
   </button>
  </div>
 )
}

export default Item