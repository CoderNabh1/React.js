import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCallback } from 'react'

function App() {

const [length, setLength] = useState(8)
const[NumberAllowed, setNumberAllowed] = useState(false)
const[charAllowed, setCharAllowed] = useState(false)
const[upperAllowed, setUpperAllowed] = useState(false)
const[password, setPassword] = useState("")

const passwordGenerator = useCallback(() => {
  let pass = ""
  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

  if (NumberAllowed) str += "0123456789"
  if (charAllowed) str += "!@#$%^&*()_+[]{}~`|;:,.<>?"
  if (upperAllowed) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }
  setPassword(pass)

}, [length, NumberAllowed, charAllowed, upperAllowed, setPassword])

  return (
    <>
      <h1 style={{fontSize: '36px', textAlign: 'center', color: 'white'}}>Password Generator</h1>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: '10px'}}>
        <div style={{backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', width: '300px', textAlign: 'center'}}>
          <input
          type = "text"
          value={password}
          placeholder='password'
          readOnly/>
        </div>
      </div>
    </>
  )
}

export default App