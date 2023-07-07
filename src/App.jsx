import { useState } from "react";

function App() {

  var [myText, setMyText] = useState("this is my initial text")
  const functionCalled = ()=>{
    setMyText("this is my changed text over here");
  }
  return (
    <div className="app">
    <h1> this is my text {myText} </h1>
    <button onClick={functionCalled}>Click Me</button>
    </div>    
  );
}

export default App;
