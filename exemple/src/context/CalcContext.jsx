import {createContext, useContext} from "react";
import useCalcutorReducer from "../reducer/useCalcutorReducer.jsx";

const CalcContext = createContext();


const CalcContextProvider = ({children}) => {
 
 const context = useCalcutorReducer();
 
 return <CalcContext.Provider value={context}>
  {children}
 </CalcContext.Provider>
}

export const useCalcContext = () => useContext(CalcContext);

export default CalcContextProvider