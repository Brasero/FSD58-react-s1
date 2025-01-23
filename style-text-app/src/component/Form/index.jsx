// path: style-text-app/src/component/Form/index.jsx
import "./style.scss";
import useTextContext from "../../context/textContext.jsx";

const options = {
 colors: ["palevioletred", "tomato"], sizes: [15, 16, 17, 18, 19, 20]
}

const Form = () => {
 
 const {state: {text}, setText, addText} = useTextContext();
 
 const handleChange = (e) => {
  const {name, value} = e.target;
  setText(name, value);
 }
 
 const handleSubmit = (e) => {
  e.preventDefault()
  if (text.content.trim() === "") return;
  addText();
 }
 return (<form onSubmit={handleSubmit} className="Form">
   <div className={"Form__group"}>
    <label htmlFor="content">Content</label>
    <input type="text" id="content" name="content" value={text.content} onChange={handleChange}/>
   </div>
   <div className={"Form__select"}>
    <label htmlFor="color">Color</label>
    <select id="color" name="color" value={text.color} onChange={handleChange}>
     {options.colors.map((color) => <option key={color} value={color}>{color}</option>)}
    </select>
   </div>
   <div className={"Form__select"}>
    <label htmlFor="size">Size</label>
    <select id="size" name="size" value={text.size} onChange={handleChange}>
     {options.sizes.map((size) => <option key={size} value={size}>{size}</option>)}
    </select>
   </div>
   <button type="submit">Add</button>
  </form>)
}

export default Form