import React from "react";
import { useNavigate } from "react-router-dom";
import './QuizDisp.css';
function QuizDisp(props){

    let history = useNavigate();
    const HandleClick=()=>{
        history("/ViewLeaderboard",{state:{QuizId:props.QuizDetails._id}});
    };

    return (
        <div className="QuizBoxes">
            <h3 className="textStyle"><img src="https://img.icons8.com/bubbles/50/000000/lock.png"/> Quiz Access Key : {props.QuizDetails.AccessKey}</h3>
            <h3 className="textStyle"><img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/40/000000/external-number-100-most-used-icons-flaticons-lineal-color-flat-icons.png"/> Number Of Questions in Quiz : {props.QuizDetails.QuestionsId.length}</h3>
            <button type="button" class="btn btn-dark stylesbutton" onClick={HandleClick}><img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/25/000000/external-award-event-management-flaticons-lineal-color-flat-icons-3.png"/> View Leaderboard</button>
        </div>
    );
}

export default QuizDisp;