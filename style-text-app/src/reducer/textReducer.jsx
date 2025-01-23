import {useReducer} from 'react';

let id = 0;

const DEFAULT_COLOR = "palevioletred";
const DEFAULT_SIZE = 16;

export const textAction = {
 SET_TEXT: "SET_TEXT",
 ADD_TEXT: "ADD_TEXT",
 REMOVE_TEXT: "REMOVE_TEXT",
}

const initialState = {
 text: {
  id: id++,
  content: "",
  color: DEFAULT_COLOR,
  size: DEFAULT_SIZE
 },
 texts: []
};

const textReducer = (state, action) => {
 switch (action.type) {
  
  case textAction.SET_TEXT:
   return {
    ...state,
    text: {
     ...state.text,
     [action.payload.name]: action.payload.value
    }
   }
   
  case textAction.ADD_TEXT:
   return {
    text: {
     id: id++,
     content: "",
     color: DEFAULT_COLOR,
     size: DEFAULT_SIZE
    },
    texts: [...state.texts, state.text]
   }
  
   case textAction.REMOVE_TEXT:
    return {
     ...state,
     texts: state.texts.filter((text) => text.id !== action.payload)
    }
    
  default:
   return state;
 }
};

const useTextReducer = () => useReducer(textReducer, initialState);

export default useTextReducer;