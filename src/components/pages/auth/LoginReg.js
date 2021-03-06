import React from "react";
import Shop from '../../../images/shop.png'
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginReg=()=>{
    return <>
        
            <div className="row">
                <div className="col-md-6">
                    <div className="imgdata"><img src={Shop} alt="" /></div>
                </div>
                <div className="col-md-6 align-self-center">

                    <div className="login-form">
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
              
            </div>
    </>
};

export default LoginReg;