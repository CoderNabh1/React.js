import { useState } from 'react'
import './App.css'

function App() {
let [counter, setCounter] = useState(5);

const addValue = () => { if(counter < 20){setCounter(counter+1); console.log(counter);}}
const reduceValue = () => { if(counter>0){setCounter(counter-1); console.log(counter);}}
  return (
    <>
      <h1>Practice Project</h1>
      <b>Counter Value:{counter}</b>
      <br />
      <button onClick={addValue}> Add Value:{counter} </button>
      <button onClick={reduceValue}> Reduce Value:{counter} </button>
    </>
  )
}

export default App
