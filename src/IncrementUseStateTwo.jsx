import React, { useState } from 'react'

function IncrementUseStateTwo() {

    var initialCount = 0;
    var [count, setCount] = useState(initialCount);

    var handleFunction = ()=>{
      for(let i=0; i<5; i++)
      {
        setCount((previous)=>previous+1);
      }
    }

  return (
    <div>
        <div className="countClass">
            {count}
        </div>
        <button onClick={()=>setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(count+1)}>Increment By one</button>
        <button onClick={()=>setCount(count-1)}>Decremnt By one</button>
        <button onClick={handleFunction}>Increment By five</button>
    </div>
  )
}

export default IncrementUseStateTwo