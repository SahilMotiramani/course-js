import {Link} from "react-router-dom";
function NavBar(){
    return(
        <div className="nav">
        <Link to="/" >Python FSD</Link>
        <Link to="/pyai" >Python Ai</Link>
        <Link to="/javsfsd" >Java FSD</Link>
        <Link to="/jsfsd" >JS FSD</Link>
        <Link to='/enquiry'>Enquiry</Link>

        </div>
    );

}
export default NavBar;