import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import ViewQuizes from "./ViewQuizes";
import CreateQuiz from "./CreateQuiz";
import Profile from "./Profile";
import './HomePage.css';
import LandingPage from "./LandingPage";
function HomePage(props){

    let history = useNavigate();
    function HandleLogout(){
        props.setUserData({})
        history('/');
    }
    const [cont, setcont]=useState([]);
    const [Display, setDisplay]=useState("Homepage");
    
    useEffect(()=>{
        if(Display=="Logout")
        HandleLogout();
    },[Display]);

    return (
        <div>
            <SideBar setDisplay={setDisplay}/>
            <div style={{width:"50%",float: "left"}}>
                {Display=="Homepage"&&
                <LandingPage userData={props.userData}/>
                }
                {Display=="CreateQuiz"&&<CreateQuiz userData={props.userData}/>}
                {Display=="ViewQuiz"&&<ViewQuizes userData={props.userData}/>}
                {Display=="Profile"&&<Profile userData={props.userData}/>}
            </div>
        </div>
    );
}
export default HomePage;