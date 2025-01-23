// path: post/src/component/List/index.jsx
import "./style.scss";
import usePostContext from "../../context/postContext.jsx";

const List = () => {
 
 const {state, deletePost} = usePostContext();
 
 return (
  <div className="List">
   {state.posts.map((post, index) => (
    <div key={index} className="List__item">
     <p>{post.content}</p>
     <button onClick={() => deletePost(post.id)} className="List__button">Delete</button>
    </div>
   ))}
  </div>
 )
}

export default List