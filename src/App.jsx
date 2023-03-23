import React from "react";
import Data from "./Data";
import Sdata from "./Sdata";
import EventHandling from "./EventHandling";
import List from "./List";
// import Conditional from "./Conditional";
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
        {/* <Conditional
        isGoal={false} /> */}
        <List />
        </>
    )
}export default App;