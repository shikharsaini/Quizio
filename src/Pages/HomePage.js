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
    // useEffect(() => {
    //     axios.get('http://localhost:9002/GetUsers').then((res)=>{
    //     var temp=[];
    //     res.data.map((user ,key)=>(temp.push(user)));
    //     let content = [];
    //     for (let i = 0; i < temp.length; i++) {
    //       const item = temp[i];
    //       content.push(<div><div>{item.name}</div><div>{item._id}</div></div>);
    //     }
    //     setcont(content);
    //     });
    // },[]);
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