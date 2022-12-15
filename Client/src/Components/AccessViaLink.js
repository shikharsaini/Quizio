import React, { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import axios from "axios";
import QuizWindow from "../Pages/QuizWindow";
function AccessViaLink(){
    const location = useLocation();
    const [inputKey, setInputKey]=useState('');
    const [quizDetails, setQuizDetails]=useState({
        QuizId:'',
        QuizDate:'',
        QuestionsId:'',
        AccessKey:'',
        QuestionNum:0
    })
    useEffect(()=>{
        if(inputKey.length==10){
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
            })}
        },[inputKey]);


    useEffect(()=>{
        let str=location.search;
        str = str.substring(1);
        setInputKey(str);
    },[]);

    return (
        <div>
            <QuizWindow quizDetails={quizDetails}/>
        </div>
    );
}

export default AccessViaLink;