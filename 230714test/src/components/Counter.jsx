import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount((count)=>count+1)
  }
  const decrement = () => {
    setCount((count)=>count-1)
  }
  return (
    <div>
        <h1>Counter 컴포넌트</h1>
        <p></p>
        <h1>{count}</h1>
        <button onClick={increment} data-testid='incrementBtn'>+</button>
        <button onClick={decrement} data-testid='decrementBtn'>-</button>
    </div>
  )
}
