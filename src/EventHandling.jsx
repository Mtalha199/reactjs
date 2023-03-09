//This example for onClick handling 
const EventHandling = () => {
    const shoot=()=>
    {
        alert("clicked by with out parameter")

    }

    const withParameter=(a)=>{
        alert(a);
    }
    return (  
        <>
        {/* only onclick  */}
        <button onClick={shoot}>Click me without Parameter</button>
        
        {/* onClick by using parameter */}
        <button onClick={()=>withParameter("by parameter")}>Click me For Shoot</button>
        </>
    );
}
 
export default EventHandling;