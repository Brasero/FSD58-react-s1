// path: style-text-app/src/component/List/index.jsx
import "./style.scss";
import useTextContext from "../../context/textContext.jsx";
import Item from "../Item/index.jsx";

const List = () => {
 
 const {state: {texts}} = useTextContext();
 
 
 
 return (
  <div className="List">
   {
    texts.length ?
     texts.map((text) => (<Item key={text.id} text={text}/>))
     :
     <p>Aucun contenu à afficher</p>
   }
  </div>
 )
}

export default List