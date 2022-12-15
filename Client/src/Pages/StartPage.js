import React from "react";
import Navbar from "../Components/Navbar";
import './StartPage.css';
import quiz from './4771.jpg';
import { useNavigate } from "react-router-dom";
function StartPage(){
    let history = useNavigate();
    function HandleNavToRegister(){
        history("/Register");
    }
    function HandleNavToQuiz(){
        history("/QuizPlatform");
    }
    return (
        <div className="mainbody">
            <div className="text">
                <div className="heading1">
                    Creating Easy to Use Quizzing Experience
                    <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/000000/external-quiz-online-education-flaticons-lineal-color-flat-icons.png"/>
                </div>
                <div className="options">
                    <div className="heading2">  For Administrators </div>
                    <div className="heading3">Click To Create Quizzes</div>
                    <button type="button" className="btn btn-outline-info clickbutton" onClick={HandleNavToRegister} >Sign Up</button>
                </div>
                <div className="options">
                    <div className="heading2">For Quiz Takers </div>
                    <div className="heading3">Click To Take Quizzes</div>
                    <button type="button" class="btn btn-outline-info clickbutton" onClick={HandleNavToQuiz}>Start Quiz</button>
                </div>
            </div>
            <div className="container image">
                <img  src={quiz} style={{width:"100%"}}  alt="fireSpot"/>
            </div>
        </div>
    );
}

export default StartPage;