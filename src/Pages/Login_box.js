import React from "react";
import Login from "../Components/Login";
import "./Login_box.css";
import Register from "../Components/Register";
import Navbar from "../Components/Navbar";
function Login_Box(props){
    return(
        <div className="Box box">
            {props.type==="login"?<Login setUserData={props.setUserData} />:<Register/>}
        </div>
    );
}
export default Login_Box;