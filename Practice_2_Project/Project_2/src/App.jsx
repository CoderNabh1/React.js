import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let counter = 5;
const addValue = () => { counter += 1; console.log(counter); }
const reduceValue = () => { counter -= 1; console.log(counter); }
  return (
    <>
      <h1>Practice Project</h1>
      <b>Counter Value:{counter}</b>
      <br />
      <button onClick={addValue}> Add Value </button>
      <button onClick={reduceValue}> Reduce Value</button>
    </>
  )
}

export default App
