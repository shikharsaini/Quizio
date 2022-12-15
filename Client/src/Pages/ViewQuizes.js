import axios from "axios";
import React, { useEffect, useState } from "react";
import QuizDisp from "../Components/QuizDisp";
function ViewQuizes(props){

    const [allQuiz, setAllQuiz]=useState([]);

    useEffect(()=>{
        const url="http://localhost:9002/GetAllQuiz?AdminId="+props.userData.id;
        axios.get(url).then((result)=>{
            if(result.data)
                {
                    setAllQuiz(allQuiz.concat(result.data));
                }
        });
    },[]);

    return (
        <div style={{margin:"15%"}}>
            {allQuiz.map((QuizDetails)=>(
                                <div>
                                     <QuizDisp  QuizDetails={QuizDetails}/> 
                                </div>
                            ))}
        </div>
    );
}

export default ViewQuizes;