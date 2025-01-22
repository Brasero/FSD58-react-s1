import {useReducer} from "react";

const initialState = {
 display: "",
 stored: "",
 operator: ""
}

const reducer = (state, action) => {
 
 switch (action.type) {
  
  case "SET_VALUE":
   return {
    ...state,
    display: String(state.display) + String(action.payload)
   }
   
  case "SET_OPERATOR":
   return {
    ...state,
    display: "",
    operator: action.payload,
    stored: state.operator !== "" ? eval(`${state.stored}${state.operator}${state.display}`) : state.display
   }
   
  case "CALC":
   return {
    ...state,
    operator: "",
    stored: "",
    display: eval(`${state.stored}${state.operator}${state.display}`)
   }
   
  case "RESET":
   return initialState;
  
  default:
   return state;
 }
}


const useCalcutorReducer = () => useReducer(reducer, initialState)

export default useCalcutorReducer