function data(props){
    
    return(
        <p>Who is Brand? {props}</p>
    )
}
const List =()=>{
    const array=["talha","tarar","mandi bahauddin"]
    return(
        <div>
            {array.map((item)=>data(item))}
        </div>
    )
}
export default List;