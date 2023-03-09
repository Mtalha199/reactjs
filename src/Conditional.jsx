function missedGoal() {
    return (
        <h1>Missed Goal</h1>
    );
}
const madeGoal=()=>{
    return
        <h1>Made a Goal</h1>
    
}
 

function Conditional(props){

    const isGoal=props.isGoal;
    if(isGoal){
    return 
         <madeGoal />

    }
     return   <missedGoal />
}
export default Conditional;