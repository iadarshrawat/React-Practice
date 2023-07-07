import React, { useState } from 'react'

function IncrementUseStateOne() {

    var [count, setCount] = useState(0);
    
    var functinCalled = ()=>{
        setCount(count+1);
    }

    return (
        <div className="increament">
            <div className="count">{count}</div>
            <button onClick={functinCalled}>Increment 1</button>
        </div>

    )
}

export default IncrementUseStateOne