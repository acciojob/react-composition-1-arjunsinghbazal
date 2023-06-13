import React from "react";
import './../styles/App.css';
import Tab from "./Tab";
const App = () => {

  const tabs = [{titles:'Tab 1',contents:'Tab 1'},{titles:'Tab 2',contents:'Tab 2'},{titles:'Tab 3',contents:'Tab 3'}]

  return (
    <div>
        {/* Do not remove the main div */}
        <Tab
          tabs={tabs}
        ></Tab>
    </div>
  )
}

export default App