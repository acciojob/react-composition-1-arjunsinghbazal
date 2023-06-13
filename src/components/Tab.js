import React, {useState} from "react";

const Tabs = ({tabs}) => {
   const [tabClicked, setTabClicked] = useState("Tab 1");
    

     function tabClickHandler(content){
        setTabClicked(content);
     }
   
    return(
        <div>
            <ul>
             {
                tabs.map((tab)=>(
                    <li
                     onClick={()=>tabClickHandler(tab.contents)}
                    >{tab.titles}</li>
                ))
             }
             </ul>
             {
                <p>This is the content for {tabClicked}.</p>
             }
        </div>
    )

}

export default Tabs;