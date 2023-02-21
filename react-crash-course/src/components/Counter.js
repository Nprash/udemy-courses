import React from 'react';
import { useState } from'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    function counting(){
        setCount(count + 1)
    } 
  return (
    <div>
      <h2> this is a Counter component</h2>
      <button onClick={counting}>{count}</button>
    </div>
  )
}

export default Counter
