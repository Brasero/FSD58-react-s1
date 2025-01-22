import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CalcContextProvider from "./context/CalcContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
 <CalcContextProvider>
  <App />
 </CalcContextProvider>
)