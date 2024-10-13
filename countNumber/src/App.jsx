import { useState } from 'react'
import './App.css'

function App() {

  const [count ,setCounter] = useState(0)

  const addValue = () =>{
    setCounter(count + 1);
  }

  const removeValue = () => {
    setCounter(count - 1);
  }

  return (
    <>
      <h1>Coding !</h1>
      <h2>Counter Value : {count}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
