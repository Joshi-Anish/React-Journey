import { useState } from 'react'
import './App.css'
import Button from './Button'

function App() {
  const username = "Anish"
  const newVal = 10

  //Normal function
  function add(a, b){
    return a+b
  }


  const sub = (a, b) => {
    return a-b
  }

  const [count, setCount] = useState(0);
  const [name, setName] = useState("Anish");

  function handleChaneText(e) {
    setName(e.target.value);
    // console.log(event.target.value);
  }
  return (
    <>
    <h1 className='text-blue-500'>Hello world! I am {username}.</h1>
    <h1>{newVal + 10}</h1>
    <h1>{add(10,45)}</h1>
    <h1>{sub(10,45)}</h1>
    <h1>count is {count}</h1>

    <button onClick={() => setCount(preVal => preVal + 1)}>Increment</button>
    <button onClick={() => setCount(preVal => preVal - 1)}>Decrement</button>
    {/* <br /><br  */}

   <h1>value:{name}</h1>  

    <input type="text" value={name} onChange={handleChaneText}/>
    
   <Button> This is a button</Button>
  
    </>
  )
}

export default App