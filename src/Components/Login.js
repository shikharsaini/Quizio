import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login(props){

    const [user, setuser]=useState({
        email:"",
        password:""
    });


    const HandleChange=(e)=>{
        
        setuser({
            ...user,
            [e.target.name]:e.target.value
        });
    }

    let history = useNavigate();

    function OpenHomePage() {
        history("/HomePage");
    }
    const Login_Button=()=>{
        if(user.email&&user.password){
            axios.post('http://localhost:9002/Login',user).then(res=>{
                if(res.data.result)
                {
                    console.log(res.data.result);
                    props.setUserData({
                        name:res.data.result.name,
                        email:res.data.result.email,
                        password:res.data.result.password,
                        id:res.data.result._id
                    })
                    OpenHomePage();
                }
            });
        }
    }

    return (
        <div className="Login_content">
            <form>
                <input type="email" className="form-control forms"  placeholder=" 📧 Enter Your Email" name="email" value={user.email} onChange={HandleChange} aria-describedby="emailHelp" />
                <input type="password" className="form-control forms"  placeholder=" 🔑 Enter Your Password" name="password" value={user.password} onChange={HandleChange} />
                <button type="button" className="btn btn-primary Loginbutton" onClick={Login_Button}>Login</button>
            </form>
        </div>
    );
}
export default Login;