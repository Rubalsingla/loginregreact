import "../App.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../images/banner.jpg';

const Navbar=()=>{
    const myStyle={
        backgroundImage: `url(${Banner})`,
        height:'30vh',
      
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return <>
    <div className="container">
        <div className="top-nav">
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
    </div>
    <div className="banner" style={myStyle}>
        <div className="banner-text">
           <h1>ABOUT</h1>
        </div>
    </div>
        
    </>;
}

export default Navbar;
