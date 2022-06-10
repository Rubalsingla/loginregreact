import "../App.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar=()=>{
    return <>
    <div className="container">
        <div className="row">
            <div className="col-sm-6">
                Logo
            </div>
            <div className="col-sm-6 menu">
                <ul>
                    <li className=""><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                   
                </ul>
            </div>
        </div>
    </div>
        
    </>;
}

export default Navbar;