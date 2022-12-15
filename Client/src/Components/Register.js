import React from "react";
import { useState } from "react";
import axios from "axios";
import './Register.css';
import { useNavigate } from "react-router-dom";

function Register(){
    const [user, setuser]=useState({
        name:"",
        email:"",
        password:""
    })

    const HandleChange=(e)=>{
        const {name,value}=e.target;
        setuser({
            ...user,
            [name]:value
        })
    }
    let history = useNavigate();
    function HandleNav(){
        history("/Login");
    }

    const Register_Button=()=>{
        if(user.name&&user.email&&user.password){
            axios.post('http://localhost:9002/Register',user).then(
                res=>{console.log(res.data.message);
                      if(res.data.message)
                    alert(res.data.message);
                    else
                    HandleNav();
                }
            );

        }
    }
    return (
        <div className="Register_content">
            <form style={{width:"100%"}}>
                <input type="text" className="form-control forms" placeholder=" 👤 Enter Your Name" name="name" value={user.name} onChange={HandleChange}  />
                <input type="email" className="form-control forms" placeholder=" 📧 Enter Your Email" name="email" value={user.email}  onChange={HandleChange} aria-describedby="emailHelp" />
                <input type="password" className="form-control forms" placeholder=" 🔑 Enter Your Password" name="password"  onChange={HandleChange} value={user.password} />
                <button type="button" className=" registerbutton btn btn-primary" onClick={Register_Button}>  Sign Up</button>
            </form>
        </div>
    );
}
export default Register;