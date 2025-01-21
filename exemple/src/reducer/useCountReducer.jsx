import {useReducer} from "react";

export const initialState = {count: 0}

export const reducer = (state, action) => {
 switch(action.type) {
  
  case "increment":
   return {
    ...state,
    count: state.count + action.payload
   }
  
  case "decrement" :
   return {
    ...state,
    count: state.count - action.payload
   }
  
  default:
   return state;
 }
}

const useCountReducer = () => useReducer(reducer, initialState);

export default useCountReducer