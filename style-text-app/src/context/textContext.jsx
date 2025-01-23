import {createContext, useContext} from "react";
import useTextReducer, {textAction} from "../reducer/textReducer.jsx";

const TextContext = createContext();

export const TextProvider = ({children}) => {
 
 const [state, dispatch] = useTextReducer()
 
 const setText = (name, value) => {
  dispatch({type: textAction.SET_TEXT, payload: {name, value}})
 }
 
 const addText = () => {
  dispatch({type: textAction.ADD_TEXT})
 }
 
 const removeText = (id) => {
  dispatch({type: textAction.REMOVE_TEXT, payload: id})
 }
 
 return <TextContext.Provider value={{state, setText, addText, removeText}}>
  {children}
 </TextContext.Provider>
}

const useTextContext = () => useContext(TextContext);

export default useTextContext;