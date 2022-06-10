import React from "react";
import Shop from '../../../images/shop.png'
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginReg=()=>{
    return <>
        
            <div className="d-flex justify-content-center">
                <div className="imgdata"><img src={Shop} alt="" /></div>
                    <div className="d-flex flex-column flex-grow-1 justify-content-center">

                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                    <button className="btn btn-primary mt-1" type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>
                    </div>
              
                </div>
    </>
};

export default LoginReg;