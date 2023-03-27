import { useState } from "react";

const UseStateArray = () => {
    const myData=[{
        id:1,
        Name:"talha",
        city:"mandibahauddin"
    },{
        id:2,
        Name:"dawood",
        city:"parianwala"
    }]
    const [mydata,setmydata]=useState(myData)
    const clear=()=>{
        setmydata([]);
    }
    return ( 
        <>
        {
            mydata.map((currVal) => <h1>My Name is {currVal.Name} and I am from {currVal.city} </h1>)
        }
        <button onClick={clear}>click me to clear all things</button>
      
       </>
     );
}
 
export default UseStateArray;