import { useState } from "react";

const Tab=({tabs})=>{
    const [cur,updatecur]=useState(0);
    const upd=(user)=>{
        updatecur(user);
    }
    return(
     <>
        <ul>
           {tabs.map((items,index)=>
            <li key={index} onClick={()=>{upd(index)}} className={cur===index?"Active":""}>{tabs.title}</li>
           )}
        </ul>
        <div>{tabs[cur].content}</div>
     </>
    )};

export default Tab;