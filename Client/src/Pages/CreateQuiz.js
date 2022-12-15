import React, { useEffect } from "react";
import { useState } from 'react';
import MCQquiz from "../Components/MCQquiz";
import DisplayQuestions from "../Components/DisplayQuestions";
import AnswerSelection from "../Components/AnswerSelection";
import axios from 'axios';
import { nanoid } from 'nanoid'
import TextQuiz from "../Components/TextQuiz";
import './CreateQuiz.css';
function CreateQuiz(props){
    const [AllQuestions, setAllQuestions]=useState({
        SavedQuestions:[],
        AccessKey:"",
        id:""
    });
    const [QuestionType, setQuestionType]= useState(0);
    const [CurrQuestion, setCurrQuestion]=useState({
        Question:"",
        Type:"",
        Answer:"",
        Option1:"",
        Option2:"",
        Option3:"",
        Option4:""
    })
    const [step, setStep]=useState(0);
    const HandleAddQuestion=()=>{
        setStep(1);
    }
    const HandleQuestionType=(e)=>{
        setQuestionType(e.target.value);
    }
    const InputQuestion=()=>{
        setCurrQuestion({...CurrQuestion,Type:QuestionType});
        if(QuestionType!=0)
        setStep(2);
    }
    const SelectAnswer=()=>{
        
        setStep(3);
    }
    const ViewQuestions=()=>{
        console.log(CurrQuestion);
        setAllQuestions({...AllQuestions,SavedQuestions:AllQuestions.SavedQuestions.concat(CurrQuestion)});
        setCurrQuestion({Question:"",Type:"",Answer:"",Option1:"",Option2:"",Option3:"",Option4:""});
        setStep(0);
    }

    useEffect(() => {
        if (AllQuestions.AccessKey.length==10) {
            axios.post('http://localhost:9002/SaveQuiz',AllQuestions);
            setAllQuestions({
                SavedQuestions:[],
                AccessKey:''
            });
        }
    }, [AllQuestions]);
    
    function HandleSaveQuiz(){
        var key=nanoid(10)
        setAllQuestions({...AllQuestions,AccessKey:key,id:props.userData.id})
    }

    return (
        <div style={{margin:"5%"}}>
            <h1 className="headingStyle"><img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/000000/external-questions-online-education-flaticons-lineal-color-flat-icons-2.png"/>  Hello Admin Lets Start Creating A Quiz</h1>
            {
                step==1&&<div>
                        <select className="form-select TypeSelect" aria-label="Default select example" onChange={HandleQuestionType}>
                            <option selected value={0}>Open this select menu</option>
                            <option value={1}>MCQ</option>
                            <option value={2}>Text Box</option>
                        </select>
                        <button type="button" class="btn btn-light nextButton" onClick={InputQuestion}>Next</button>
                    </div>
            }
            {
                step==2&&QuestionType==1&&<div>
                    <MCQquiz setCurrQuestion={setCurrQuestion} CurrQuestion={CurrQuestion}/>
                    <button type="button" class="btn btn-light nextButton" onClick={SelectAnswer}>Next</button>
                </div>
            }
            {
                step==2&&QuestionType==2&&<div>
                    <TextQuiz setCurrQuestion={setCurrQuestion} CurrQuestion={CurrQuestion}/>
                    <button type="button" class="btn btn-light nextButton" onClick={SelectAnswer}>Next</button>
                </div>
            }
            {
                step==3&&<div>
                    <AnswerSelection setCurrQuestion={setCurrQuestion} CurrQuestion={CurrQuestion} />
                    <button type="button" class="btn btn-light nextButton" onClick={ViewQuestions}>Add Question</button>
                </div>
            }
            {   step==0&&<div>
                            {AllQuestions.SavedQuestions.map((QuestionDetails,key)=>(
                                <div>
                                     <DisplayQuestions  CurrQuestions={QuestionDetails} ind={key+1}/> 
                                </div>
                            ))}
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button type="button" className="btn btn-primary quizbutton" onClick={HandleAddQuestion}>Add question</button>
                                <button type="button" className="btn btn-primary quizbutton" onClick={HandleSaveQuiz}>Create Quiz</button>
                            </div>
                        </div>
            }
        </div>
    );
}

export default CreateQuiz;