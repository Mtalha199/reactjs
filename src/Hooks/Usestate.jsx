import { useState } from "react";
//if we want to toggle value change again by click
const Usestate = () => {
    const [name ,setName]=useState("My name is Talha Tarar")
    const  Surname=()=>{
        let val=name;
        if(val==="My name is Talha Tarar"){
            setName("My Surname is Arshad Mehmood Tarar")
        }else
        {
            setName("My name is Talha Tarar")
        }
        
    }
    return ( 
        <>
       <h1> {name} </h1>
       <button onClick={Surname}>click me for my surname </button>
        </>
     );
}
 
export default Usestate;