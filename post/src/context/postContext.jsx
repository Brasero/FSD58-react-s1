import {createContext, useContext} from "react";
import usePostReducer, {postActions} from "../reducer/postReducer.jsx";

const PostContext = createContext();

export const PostProvider = ({children}) => {
 
 const [state, dispatch] = usePostReducer();
 
 const addPost = () => dispatch({type: postActions.ADD_POST});
 const changePost = (content) => dispatch({type: postActions.CHANGE_POST, payload: content});
 const deletePost = (id) => dispatch({type: postActions.DELETE_POST, payload: id});
 
 return <PostContext.Provider value={{state, addPost, changePost, deletePost}}>
  {children}
 </PostContext.Provider>
}

const usePostContext = () => useContext(PostContext);

export default usePostContext;