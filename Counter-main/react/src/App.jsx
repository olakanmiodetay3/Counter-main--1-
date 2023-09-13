import { useState, useEffect } from 'react'
import * as Icon from "react-feather";

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const incrementByOne = ()=> setCount ((count)=> count + 1)
  const incrementByTen = ()=> setCount ((count)=> count + 10)
  const resetToZero = () => setCount(0);

  const setRandomCount = () => {
    const randomValue = Math.floor(Math.random() * 100) + 1; 
    setCount(randomValue); 
  };

  const decrementByTen = ()=> setCount ((count)=> count - 10)

  const decrementByOne = ()=> setCount ((count)=> count - 1)


  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  
  

  return (
    <>

 

      <section className = "main-counter">
      <p>Current value:</p>

      <div className = "count">
    
       {count}
      </div>
      
      <div className="card">
        <button onClick = {incrementByOne}>
        <Icon.ChevronUp/>
         </button> 

         <button onClick = {incrementByTen}>
        <Icon.ChevronsUp/>
         </button>

         <button onClick = {resetToZero}>
        <Icon.RotateCcw/>
         </button>
  
         <button onClick = {setRandomCount}>
        <Icon.Hash/>
         </button>

         <button onClick = {decrementByTen}>
        <Icon.ChevronsDown/>
         </button>

         <button onClick = {decrementByOne}>
        <Icon.ChevronDown/>
         </button>

         



      </div>
      </section>
      
    </>
  )
}

export default App