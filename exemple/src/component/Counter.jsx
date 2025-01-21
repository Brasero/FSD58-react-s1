import {useState} from "react";

const Counter = ({step = 1, maxValue = 20}) => {
 
 const [count, setCount] = useState(0);
 const [isRunning, setIsRunning] = useState(false)
 
 let timeoutID = 0;
 const start = () => {
  setIsRunning(true);
 }
 
 const stop = () => {
  setIsRunning(false)
  clearTimeout(timeoutID)
 }
 
 const tick = () => {
  if (isRunning && count < maxValue) {
   timeoutID = setTimeout(() => {
    incrementValue()
   }, 1000)
  } else if (isRunning) {
   setIsRunning(false)
  }
 }
 const incrementValue = () => {
  setCount(count + step);
 }
 
 const reset = () => {
  setIsRunning(false)
  setCount(0);
  clearTimeout(timeoutID)
 }
 
 tick()
 return (
  <div className={"counter"}>
    <div className={"counter-value"}>{count}</div>
    <div>
     <button onClick={start} disabled={isRunning}>Start</button>
     <button onClick={stop} disabled={!isRunning}>Stop</button>
     {
      count !== 0 && <button onClick={reset}>Reset</button>
     }
    </div>
  </div>
 )
}

export default Counter;