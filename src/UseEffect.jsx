// the useEffect hook lets you perform side effects in functional components
// it is a close replacement of ComponentDidMount, componentDidUpdate and componentWillUnmount

import React, { useEffect, useState } from 'react'

function UseEffect() {
    var [count, setCount] = useState(0);
    var [data, setData] = useState(10);

    // component ke andar jab bhi state change hota hai, tabhi humara useEffect run hoga (only if we are not pass second parameter in useEffect)

    // agar mene second parameter me count pass kardiya tw vo count componet ke change hone par he run hoga

    useEffect(()=>{
        console.log("component mount")
    }, [count])

  return (
    <>
        <h1>This is my count value = {count}</h1>
        <button onClick={()=>setCount(count+1)}>Count</button>
        <button onClick={()=>setData(data-1)}>Set Data</button>
    </>
  )
}

export default UseEffect