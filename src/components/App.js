import React, { useState } from "react";
import "./../styles/App.css";
import Tab from "./Tab";

const App = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick=(title) => {
    setActiveTab(title);
  };

  return (
    <div>
      <ul>
        <li onClick={() => handleTabClick("Tab 1")}>Tab 1</li>
        <li onClick={() => handleTabClick("Tab 2")}>Tab 2</li>
        <li onClick={() => handleTabClick("Tab 3")}>Tab 3</li>
      </ul>
      {<Tab title={activeTab}/>}
    </div>
  );
};

export default App;
