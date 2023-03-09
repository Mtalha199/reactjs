import React from "react";
import Data from "./Data";
import Sdata from "./Sdata";
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
        </>
    )
}
export default App;