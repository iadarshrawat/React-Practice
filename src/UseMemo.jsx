// with the help of useMemo hook we memoize the value, not function

import React, { useMemo, useState } from 'react'

function UseMemo() {
    
    var [item, setItem] = useState(0);
    var [count, setCount] = useState(0);

    // function memoFun() {
    //     console.log("functon called")
    //     return (count + 40)
    // }

    // with the help of useMemo => function tabhi call hoga jab count me change aayga

    function f(){};

    var useMemoFunction = useMemo(function memoFun(f) {
            console.log("functon called")
            return (count + 40)
        }, [count])

  return (
    <>
        <h1>Count: {count}</h1>
        <h1>Item: {item}</h1>
        <h1>For memo Exaple: {useMemoFunction} </h1>
        <button onClick={()=>setCount(count+1)} >Update count</button>
        <button onClick={()=>setItem(item + 100 )}> Update Item </button>
    </> 
  )
}

export default UseMemo;