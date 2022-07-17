import React, { useEffect } from "react";
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom';
function Navbar(){
    const location = useLocation();
    let history = useNavigate();


    function OpenLoginPage() {
        history("/Login");
    }
    const HandleLogin=()=>{
        OpenLoginPage();
    }
    function HandleRegister(){
        history("/Register");
    }
    function HandleHomePage(){
        history("/HomePage");
    }
    function HandleStartQuiz(){
        history("/QuizPlatform");
    }
    function HandleStartPage(){
        history("/");
    }

    return(
    <nav class="navbar sticky-top navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand heading" href="http://localhost:3000/">Quizio  <img src="https://img.icons8.com/external-justicon-flat-justicon/100/000000/external-owl-education-justicon-flat-justicon.png"/></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            {  (location.pathname=="/"||location.pathname=="/Login"||location.pathname=="/Register") && <div class="navbar-nav d-flex">
                                            <button class="nav-link subheading" onClick={HandleLogin}>Login</button>
                                            <button class="nav-link subheading" onClick={HandleRegister} >Sign Up</button>
                                        </div>
            }
            {  (location.pathname=="/HomePage"||location.pathname=="/ViewLeaderboard") && <div class="navbar-nav d-flex">
                                            <button class="nav-link subheading" onClick={HandleHomePage}>Dashboard</button>
                                            <button class="nav-link subheading" onClick={HandleStartPage} >Logout</button>
                                        </div>
            }
            {  (location.pathname=="/QuizPlatform"||location.pathname=="/EndQuiz") && <div class="navbar-nav d-flex">
                                            <button class="nav-link subheading" onClick={HandleStartQuiz}>Start Quiz</button>
                                            <button class="nav-link subheading" onClick={HandleStartPage} >HomePage</button>
                                        </div>
            }
        </div>
    </nav>
    );
}

export default Navbar;