import React from "react";
import Data from "./Data";
import Sdata from "./Sdata";
import EventHandling from "./EventHandling";
function mydata(val){
    return(
    <>
        <Data 
         talha={val.button}
         link={val.link}
         />
    </>
    )
}
function App(){
    return(
        <>
        
        {Sdata.map(mydata)}
        <EventHandling />
        </>
    )
}
export default App;