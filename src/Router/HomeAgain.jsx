// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const HomeAgain = () => {
    const login=()=>{






         localStorage.setItem('login',true);
         alert('hey ustad ho gai o login wanj ayashi kar ')
    }
        // const navigate=useNavigate();
        // useEffect(()=>{
        //     let login=localStorage.getItem('login');
        //     if(login){
        //         navigate('/about')
        
// }
// })
    
    return (  
        <>
        <h1>logo</h1>
        <button onClick={login}>Login</button>
        </>
    );
// }
    }
export default HomeAgain;