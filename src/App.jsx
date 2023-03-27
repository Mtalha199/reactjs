import React from "react";
// import Data from "./Data";
// import Sdata from "./Sdata";
// import EventHandling from "./EventHandling";
// import List from "./List";
import {Routes,Route} from "react-router-dom"
// import Conditional from "./Conditional";
import About from "./Router/About";
import Home from "./Router/Home";
import Contact from "./Router/Contact";
import Error from "./Router/Error";
import HomeAgain from "./Router/HomeAgain";
import Usestate from "./Hooks/Usestate";
// function mydata(val){
//     return(
//     <>
//         <Data 
//          talha={val.button}
//          link={val.link}
//          />
//     </>
//     )
// }
function App(){
    return(
        <>

            <Usestate />        
           {/* <Routes>
            <Route path="/" element={<Home />}>
                <Route index element={<HomeAgain />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="Contact" element={<Contact />}></Route>
            <Route path="*" element={<Error />}></Route>
            </Route>
            </Routes> */}
        {/* {Sdata.map(mydata)} */}
        {/* <EventHandling /> */}
        {/* <Conditional
        isGoal={false} /> */}
        {/* <List /> */}
        </>
    )
}export default App;