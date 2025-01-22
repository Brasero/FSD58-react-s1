import {useReducer} from "react";


const initialState = {
 a: "",
 b: "",
 error: "",
 result: "",
 count: 0
}

const checkValues = (state) => {
 if (state.a === "") return false
 if (state.b === "") return false
 return true
}

const reducer = (state, action) => {
 switch(action.type) {
  
  case "change_value":
   return {
    ...state,
    [action.payload.name]: action.payload.value,
    error: ""
   }
   
  case "calculate":
  return checkValues(state) ? {
   ...state,
   error:"",
   result:eval(`${state.a}${action.payload}${state.b}`),
   a: "",
   b: "",
   count: state.count + 1
  } :
   {
    ...state,
    error: "Merci de remplir les deux champs avant de calculer."
   }
   
  case 'reset':
   return initialState;
  
  default:
   return state;
 }
}

const useCalculatorReducer = () => useReducer(reducer, initialState);

export default useCalculatorReducer