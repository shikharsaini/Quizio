import React, { useState } from "react";
import DisplayQuiz from "../Components/DisplayQuiz";
import './Quiz.css';
import axios from "axios";
function QuizWindow(props){
    const [step, setStep]=useState(0);
    const [userDetails, setUserDetails]=useState({
        name:'',
        Score:0,
        Quizid:''
    });

    const HandleChange=(e)=>{
        setUserDetails({
            ...userDetails,
            name:e.target.value,
            Quizid:props.quizDetails.QuizId
        })
    }
    const HandleClick=()=>{
        const Data={
            Quizid:props.quizDetails.QuizId,
            name:userDetails.name
        };
        const url="http://localhost:9002/CheckUser?Details="+Data;
        console.log(url);
        axios.get('http://localhost:9002/CheckUser', {
            params: {
                Quizid:props.quizDetails.QuizId,
                name:userDetails.name
              }
            
          }).then(res=>{
            console.log(res.data);
            if(res.data.result)
            {
                alert('User Has Already Taken The Quiz');
            }
            else
            {
                setStep(1);
            }
        });
    }
    
    return (
        <div>
            {   step==0&&<div >
                <div >
                    <input type="text" className="form-control AccessText" placeholder="Enter your Name" value={userDetails.name} onChange={HandleChange} />
                </div>
                <button type="button" class="StartButton" onClick={HandleClick}><img src="https://img.icons8.com/stickers/40/000000/circled-chevron-right.png"/> Next </button>
            </div>
            }
            {
                step==1  && <DisplayQuiz userDetails={userDetails} setUserDetails={setUserDetails} QuestionNum={props.quizDetails.QuestionNum} QuestionsId={props.quizDetails.QuestionsId} />
            }
        </div>
    );
    

}

export default QuizWindow;