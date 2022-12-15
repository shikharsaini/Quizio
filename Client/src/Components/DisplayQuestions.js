import React from "react";
import './MCQquiz.css';

function DisplayQuestions(props){
    if(props.CurrQuestions.Type==1){
    return (
        <div className="mcqbox">
            <div className="questionHeading">Question {props.ind}</div>
            <form className="row g-3">
                <div className="col-12">
                        <input className="form-control inputbox" value={props.CurrQuestions.Question}/>
                    </div>
                    <div className="col-md-6">
                        <input className="form-control inputbox" value={props.CurrQuestions.Option1}/>
                    </div>
                    <div className="col-md-6">
                        <input className="form-control inputbox" value={props.CurrQuestions.Option2}/>
                    </div>
                    <div className="col-md-6">
                        <input className="form-control inputbox" value={props.CurrQuestions.Option3}/>
                    </div>
                    <div className="col-md-6">
                        <input className="form-control inputbox" value={props.CurrQuestions.Option4}/>
                    </div>
            </form>
        </div>
    );
    }
    else{
        return(
        <div className="mcqbox">
            <div className="questionHeading">Question {props.ind}</div>
            <form className="row g-3">
                <div className="col-12">
                        <input className="form-control inputbox" value={props.CurrQuestions.Question}/>
                    </div>
                    <div className="col-md-6">
                        <input className="form-control inputbox" value={props.CurrQuestions.Answer}/>
                    </div>
            </form>
        </div>);
    }
}

export default DisplayQuestions;