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
import Protected from "./Router/protected";
// import Usestate from "./Hooks/Usestate";
// import UseStateArray from "./Hooks/useStateArray";
// import UseStateloginpage from "./Hooks/UseStateloginpage";
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
            {/* <UseStateloginpage /> */}















       {/* <UseStateArray /> */}
{/* 
            <Usestate />         */}
           <Routes>
            <Route path="/" element={<Home/>}>
                <Route index element={<HomeAgain />}></Route>
            <Route path="about" element={<Protected Component={About}/>}></Route>
            <Route path="Contact" element={<Contact />}></Route>
            <Route path="*" element={<Error />}></Route>
            </Route>
            </Routes>
        {/* {Sdata.map(mydata)} */}
        {/* <EventHandling /> */}
        {/* <Conditional
        isGoal={false} /> */}
        {/* <List /> */}
        </>
    )
}export default App;