import { Link, Outlet } from "react-router-dom";
const Home = () => {
    return ( 
        <>
        <ul>
            <Link to="/" > Home </Link></ul>
        <ul>
           <Link to="/about"> About</Link></ul>
        <ul>
            <Link to="/contact">contact</Link></ul>
            
            <Outlet />
        </>
     );
}
 
export default Home;
