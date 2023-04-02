import { useState } from "react";

const UseStateloginpage = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [newEntry ,setNewEntry]=useState([])
    const  showData=()=>{
       const ewEntry={
        email:email,
        password:password
       }
            setNewEntry(ewEntry)
    }
    return ( 
        <>
        <input type="text" name="email" id="email" placeholder="email" value={email} onChange={(e)=>setEmail( e.target.value)}/><br />
        <input type="password" name="password" id="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} /> <br />
        <button onClick={showData}>Submit</button>
        <div>
            {
                    <>
                    <p>{newEntry.email}</p>
                    <p>{newEntry.password}</p>
                    </>
            }
        </div>

        </>
     );
}
 
export default UseStateloginpage;