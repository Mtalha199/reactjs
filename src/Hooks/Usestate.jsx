import { useState } from "react";

const Usestate = () => {
    const [name ,setName]=useState("My name is Talha Tarar")
    const  Surname=()=>{
        setName("My Surname is Arshad Mehmood Tarar")
    }
    return ( 
        <>
       <h1> {name} </h1>
       <button onClick={Surname}>click me for my surname </button>
        </>
     );
}
 
export default Usestate;