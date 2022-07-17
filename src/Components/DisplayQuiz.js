import React, { Component, useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './DisplayQuiz.css';
function DisplayQuiz(props){
    
    const [col, setCol]=useState({
        option1:false,
        option2:false,
        option3:false,
        option4:false
    });

    const [timer, setTimer]=useState(-1);

    const [lastQuestion, setLastQuestion]=useState(false); 

    const HandleColor=(e)=>{
         
        if(e.target.value==1)
        setCol({option1:true,option2:false,option3:false,option4:false})
        else if(e.target.value==2)
        setCol({option1:false,option2:true,option3:false,option4:false})
        else if(e.target.value==3)
        setCol({option1:false,option2:false,option3:true,option4:false})
        else if(e.target.value==4)
        setCol({option1:false,option2:false,option3:false,option4:true})
    }

    const [question, setQuestion]=useState({
        Question:"",
        Type:0,
        Answer:"",
        Option1:"",
        Option2:"",
        Option3:"",
        Option4:""
    });
    const [useranswer,setuseranswer]=useState('');
    const [limit, setlimit]=useState(0);

    useEffect(() => {
        setCol({
            option1:false,
            option2:false,
            option3:false,
            option4:false
        });
        const url="http://localhost:9002/GetQuestion?QuestionId="+props.QuestionsId[limit];
        axios.get(url).then((res)=>{
            if(res.data.result)
                {
                    setQuestion({
                        Question:res.data.result.Question,
                        Type:res.data.result.Type,
                        Answer:res.data.result.Answer,
                        Option1:res.data.result.Option1,
                        Option2:res.data.result.Option2,
                        Option3:res.data.result.Option3,
                        Option4:res.data.result.Option4
                    })
                }
        });
    },[limit]);
    

    useEffect(()=>{
        if(timer>0)
        startTimer();
        if(timer==0)
        {
            if(limit+1==props.QuestionsId.length)
            HandleEndQuiz()
            else
            HandleClick();
        }

    },[timer])


    useEffect(()=>{
        setTimer(60);
    },[]);
    var timeouts=[];
    const startTimer=()=>{
        timeouts= setTimeout(() => {
            setTimer(timer-1);
          }, 1000);
    };

    let history = useNavigate();
    

    useEffect(()=>{
        if(limit+1==props.QuestionsId.length)
        setLastQuestion(true);
        if(limit>0&&limit==props.QuestionsId.length)
        {
            axios.post('http://localhost:9002/StoreResult',props.userDetails);
            history('/EndQuiz',{state:{Score:props.userDetails.Score,TotQuestions:limit}});
        }
    },[limit]);

    const HandleClick=()=>{ 
        if(question.Answer==1&&col.option1==true)
        props.setUserDetails({...props.userDetails,Score:props.userDetails.Score+1});
        else if(question.Answer==2&&col.option2==true)
        props.setUserDetails({...props.userDetails,Score:props.userDetails.Score+1});
        else if(question.Answer==3&&col.option3==true)
        props.setUserDetails({...props.userDetails,Score:props.userDetails.Score+1});
        else if(question.Answer==4&&col.option4==true)
        props.setUserDetails({...props.userDetails,Score:props.userDetails.Score+1});
        else if(question.Answer==useranswer)
        props.setUserDetails({
            ...props.userDetails,
            Score:props.userDetails.Score+1
        });
        if(limit+1<props.QuestionsId.length)
        setlimit(limit+1);
        setTimer(60);
    }

    const HandleEndQuiz=()=>{

        if(question.Answer==1&&col.option1==true)
        props.setUserDetails({
            ...props.userDetails,
            Score:props.userDetails.Score+1
        });
        else if(question.Answer==2&&col.option2==true)
        props.setUserDetails({
            ...props.userDetails,
            Score:props.userDetails.Score+1
        });
        else if(question.Answer==3&&col.option3==true)
        props.setUserDetails({
            ...props.userDetails,
            Score:props.userDetails.Score+1
        });
        else if(question.Answer==4&&col.option4==true)
        props.setUserDetails({
            ...props.userDetails,
            Score:props.userDetails.Score+1
        });
        else if(question.Answer==useranswer)
        props.setUserDetails({
            ...props.userDetails,
            Score:props.userDetails.Score+1
        });
        console.log(question.Answer);
        console.log(useranswer);
        setlimit(limit+1);
    }
    const HandleChange=(e)=>{
        setuseranswer(e.target.value);
    }

    if(question.Type==1){
    return (
        <div>
            <form className="row g-3">
                <div className="Timer">{timer}</div>
                <input type="text" className="form-control AccessText" name="Question" value={question.Question} disabled readonly />
                <div className="col-md-6">
                    <button type="button" className={col.option1 ? "Answer btn col-8 inputbox1":"btn btn-outline-success inputbox1 col-8"} value="1" onClick={HandleColor} >{question.Option1}</button>
                </div>
                <div className="col-md-6">
                    <button type="button" className={col.option2 ? "Answer btn col-8 inputbox1":"inputbox1 btn btn-outline-success col-8"} value="2" onClick={HandleColor}>{question.Option2}</button>
                </div>
                <div className="col-md-6">
                    <button type="button" className={col.option3 ? "Answer btn col-8 inputbox1":"inputbox1 btn btn-outline-success col-8"} value="3" onClick={HandleColor}>{question.Option3}</button>
                </div>
                <div className="col-md-6">
                    <button type="button" className={col.option4 ? "Answer btn col-8 inputbox1":"inputbox1 btn btn-outline-success col-8"} value="4" onClick={HandleColor}>{question.Option4}</button>
                </div>     
            </form>
            {!lastQuestion && <button type="button" class="btn btn-dark quizbutton" onClick={()=>{clearTimeout(timeouts);setTimer(0);}}>Next</button>}
            {lastQuestion && <button type="button" class="btn btn-dark quizbutton" onClick={HandleEndQuiz}>End Quiz</button>}
        </div>
    );
    }
    else if(question.Type==2){
        return (
            <div>
                <form className="row g-3">
                    <div className="Timer">{timer}</div>
                    <input type="text" className="form-control AccessText" name="Question" value={question.Question} disabled readonly />
                    <div className="col-md-6">
                    <input type="text" className="form-control AccessText" name="Answer" value={useranswer} onChange={HandleChange}/>
                    </div>     
                </form>
                {!lastQuestion && <button type="button" class="btn btn-dark quizbutton" onClick={()=>{clearTimeout(timeouts);setTimer(0);}}>Next</button>}
                {lastQuestion && <button type="button" class="btn btn-dark quizbutton" onClick={HandleEndQuiz}>End Quiz</button>}
            </div>
        );
    }
    else{
        return (
            <div>

            </div>
        )
    }
}


export default DisplayQuiz;