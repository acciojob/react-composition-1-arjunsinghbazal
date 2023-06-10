
import React, { useState } from "react";
import './../styles/App.css';
import Tab from "./Tab";
const Head=(prop)=>{
return (
  <Tab title={prop}/>
)
}
const App = () => {
  [current,setCurrent]=useState("");
  const update=(that)=>{
    return setCurrent(that);
  }
  return (
    <div>
     <ul>
      <li onClick={update("Tab 1")}>Tab 1</li>
      <li onClick={update('Tab 2')}>Tab 2</li>
      <li onClick={update('Tab 3')}>Tab 3</li>

     </ul>
     <p><Tab title={current}/></p>
    </div>
  )
}

export default App
