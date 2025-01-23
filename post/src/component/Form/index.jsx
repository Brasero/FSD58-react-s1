// path: post/src/component/Form/index.jsx
import "./style.scss";
import usePostContext from "../../context/postContext.jsx";


const Form = () => {
 
 const {state, changePost, addPost} = usePostContext();
 
 const handleChange = (e) => {
  changePost(e.target.value);
 }
 
 const handleSubmit = (e) => {
  e.preventDefault()
  if(state.post.content.trim() === "") return;
  addPost();
 }
 
 return (<form className="Form" onSubmit={handleSubmit}>
  <div className="Form__inputGroup">
   <label htmlFor="content" className="Form__label">Content</label>
   <input name={"content"} onChange={handleChange} value={state.post.content} type="text" className="Form__input" id="content"/>
  </div>
  <button type="submit" className="Form__button">Submit</button>
 </form>)
}

export default Form