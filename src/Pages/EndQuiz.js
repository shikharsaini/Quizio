import React from "react";
import {useLocation} from 'react-router-dom';
function EndQuiz(){
    const location = useLocation();
    return (
        <div>
            <h1>Thank You For Taking The Quiz</h1>
            <h2>Your Score Has Been Successfully Stored</h2>
            <h2>Your Result Is {location.state.Score}/{location.state.TotQuestions} </h2>
        </div>
    );
}

export default EndQuiz;