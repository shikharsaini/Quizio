import React, { useState, useEffect } from "react";
import axios from 'axios';
import QuizWindow from "./QuizWindow";
import './Quiz.css';
function Quiz(){
    
    const [inputKey, setInputKey]=useState('');
    const [quizDetails, setQuizDetails]=useState({
        QuizId:'',
        QuizDate:'',
        QuestionsId:'',
        AccessKey:'',
        QuestionNum:0
    })
    const [step, setStep]=useState(-1);
    const HandleChange=(e)=>{
        if(e.target.value.length<=10)
        setInputKey(e.target.value);
    }

    useEffect(() => {
        setStep(step+1);
      },[quizDetails]);

    const StartQuiz=()=>{
        const Data={
            AccessKey:inputKey
        }
        const url="http://localhost:9002/GetQuiz?AccessKey="+inputKey;
        axios.get(url).then(res=>{
                if(res.data.result)
                {
                    setQuizDetails({
                        QuizId:res.data.result._id,
                        QuizDate:res.data.result.QuizDate,
                        QuestionsId:res.data.result.QuestionsId,
                        AccessKey:res.data.result.AccessKey,
                        QuestionNum:0
                    }
                    );
                }
            });
    }

    return (
        <div>
        {  step==0 && <div>
                        <h1 className="userText">Welcome User <img src="https://img.icons8.com/bubbles/80/000000/user.png"/></h1>
                        <div >
                            <input type="text" className="form-control AccessText" id="formGroupExampleInput" placeholder="Enter 10 digit Access Key" value={inputKey} onChange={HandleChange}/>
                        </div>
                        <button type="button" className="StartButton" onClick={StartQuiz}>Start Quiz</button>
                     </div>
        }
        {
            step==1 && <QuizWindow quizDetails={quizDetails}/>
        }
        </div>
    );
}

export default Quiz;