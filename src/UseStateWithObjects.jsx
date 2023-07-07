import React, { useState } from 'react'

function UseStateWithObjects() {

  const [name, setName] = useState({firstName:'', lastName:''});

  return (
    <form action="">
      {/* here we use the spread operator as it help in maintaining the previous text */}
      <input type="text" value={name.firstName} onChange={(e)=>setName({...name, firstName:e.target.value})}/>
      <input type="text" value={name.lastName} onChange={(e)=>setName({...name, lastName:e.target.value})}/>
      <h2>{name.firstName}</h2>
      <h2>{name.lastName}</h2>
    </form>
  )
}

export default UseStateWithObjects