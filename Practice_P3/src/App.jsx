import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  const userOne = {
    name: "John Doe",
    age: 30,
    bio: "Software Engineer passionate about React."
  };

  const userTwo = {
    name: "Jane Smith",
    age: "25",
    bio: "UX Designer who loves creating beautiful interfaces."
  };

  const userThree = {
    name: "Peter Jones",
    age: 42,
    bio: "Project Manager with a love for hiking and data."
  };
  return (
    <>
      <Card name={userOne.name} age={userOne.age} bio={userOne.bio}/>
      <Card name={userTwo.name} age={userTwo.age} bio={userTwo.bio}/>
    </>
  )
}

export default App