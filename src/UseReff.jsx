import React, { useRef, useState } from 'react'

// what is useRef?
// useReff is a Hook through which we easily manupulate the DOM like changin the color or etc.


function UseReff() {

    const [name, setName] = useState("");
    const refElement = useRef('');
    function funCalled (e){
        setName(e.target.value);
        // refElement.current.style.color='red';
    }
    function btnColorChange(e){
        refElement.current.style.color='red';
    }
  return (
    <>
    <h1>Learing useReff</h1>
    <input  ref={refElement} type="text" value={name} onChange={funCalled}/>
    <button onClick={btnColorChange}>color Change</button>
    </>
  )
}

export default UseReff