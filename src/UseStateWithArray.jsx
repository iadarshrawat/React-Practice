import React, { useState } from 'react'

function UseStateWithArray() {

    var [items, setItems] = useState([]);

    function funCalled(){
        setItems([...items,
         {id:items.length, value:Math.floor(Math.random()*10)+1}   
        ])
        console.log(items)
    }

    return (
        <>
            <button onClick={funCalled}>Add Random Items</button>
            <ul>
                {
                    items.map(item => <li key={item.key}>{item.value} </li>)
                }
            </ul>
        </>
    )
}

export default UseStateWithArray