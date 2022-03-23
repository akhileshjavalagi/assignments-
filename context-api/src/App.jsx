import { useEffect, useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const ref = useRef(null)

  useEffect(()=>{
    start()
  },[])

  const start = () =>{
    ref.current = setInterval(()=>{
      setCount((p)=>
      p+1)
    },1000)
  }

  return (
    <div className="App">
      <h1>{count}</h1>
     <button onClick={()=>{
       clearInterval(ref.current)
     }}>stop</button>

     <button onClick={start}>start</button>

     <button onClick={()=>{
       clearInterval(ref.current)
       setCount(0)
     }}>reset</button>
    </div>
  )
}

export default App
