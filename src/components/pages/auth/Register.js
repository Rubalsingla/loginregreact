import React from "react";
import Shop from '../../../images/shop.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import axios from 'axios';

const Register=()=>{

    const [uname, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  

    let save = (e) => {
        e.preventDefault();
        console.log(uname);
        console.log(email);
        console.log(password);

        e.preventDefault();
        axios.post('/user', {
            Name: uname,
            email: email,
            password:password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
                
      }
    return <>
        
            <div className="d-flex justify-content-center">
                <div className="imgdata"><img src={Shop} alt="" /></div>
                <form onSubmit={save}>

                <div className="d-flex flex-column flex-grow-1 justify-content-center">
                    <label><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" onChange={(e) => setName(e.target.value)} required />
                    <label><b>Email</b></label>
                    <input type="email" placeholder="Enter Email" name="email" onChange={(e) => setEmail(e.target.value)} required />
                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" onChange={(e) => setPassword(e.target.value)} required />
                    <button className="btn btn-primary mt-1" type="submit">Register</button>
                </div>


                </form>
                    
              
                </div>
    </>
};

export default Register;