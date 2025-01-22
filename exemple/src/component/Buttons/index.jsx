const Buttons = ({dispatch}) => {
 
 const handleClick = (payload) => {
  dispatch({
   type: "calculate",
   payload
  })
 }
 
 const handleReset = () => {
  dispatch({
   type: "reset"
  })
 }
 
 return <>
  <button onClick={() => handleClick("+")}>+</button>
  <button onClick={() => handleClick("*")}>*</button>
  <button onClick={handleReset}>reset</button>
 </>
}

export default Buttons;