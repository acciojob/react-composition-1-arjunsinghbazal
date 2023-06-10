import React, { useState } from "react";
import "./../styles/App.css";
import Tab from "./Tab";

const App = () => {
  const [activeTab, setActiveTab] = useState("");
 const [count,setcount]=useState(false);
  const handleTabClick = (title) => {
    setActiveTab(title);
    setcount(true);
  };

  return (
    <div>
      <ul>
        <li onClick={() => handleTabClick("Tab 1")}>Tab 1</li>
        <li onClick={() => handleTabClick("Tab 2")}>Tab 2</li>
        <li onClick={() => handleTabClick("Tab 3")}>Tab 3</li>
      </ul>
      {count?<Tab title={activeTab} />:null}
    </div>
  );
};

export default App;
