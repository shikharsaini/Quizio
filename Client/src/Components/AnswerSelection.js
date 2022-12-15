import React from "react";
import {useState} from "react";
import './Answerselection.css';
import './MCQquiz.css';
function AnswerSelection(props){
        const [col, setCol]=useState({
        option1:false,
        option2:false,
        option3:false,
        option4:false
    });
    const HandleColor=(e)=>{
         
        if(e.target.value==1)
        setCol({option1:true,option2:false,option3:false,option4:false})
        else if(e.target.value==2)
        setCol({option1:false,option2:true,option3:false,option4:false})
        else if(e.target.value==3)
        setCol({option1:false,option2:false,option3:true,option4:false})
        else if(e.target.value==4)
        setCol({option1:false,option2:false,option3:false,option4:true})
        props.setCurrQuestion({
            ...props.CurrQuestion,
            Answer:e.target.value
        })
    }
    const HandleChange=(e)=>{
        props.setCurrQuestion({
            ...props.CurrQuestion,
            Answer:e.target.value
        })
    }

    if(props.CurrQuestion.Type==1){
    return(
        <div>
            <div className="mcqbox">
                <form className="row g-3">
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label inputbox">Select Correct Answer 💡</label>
                        <input type="text" className="form-control inputbox" placeholder="Enter Your Question Here" name="Question" value={props.CurrQuestion.Question} disabled readonly />
                    </div>
                    <div className="col-md-6">
                        <button type="button" className={col.option1 ? "Answer btn col-8 inputbox stylebutton":"btn btn-outline col-8 inputbox stylebutton"} value="1" onClick={HandleColor} >{props.CurrQuestion.Option1}</button>
                    </div>
                    <div className="col-md-6">
                        <button type="button" className={col.option2 ? "Answer btn col-8 inputbox stylebutton":"btn btn-outline col-8 inputbox stylebutton"} value="2" onClick={HandleColor}>{props.CurrQuestion.Option2}</button>
                    </div>
                    <div className="col-md-6">
                        <button type="button" className={col.option3 ? "Answer btn col-8 inputbox stylebutton":"btn btn-outline col-8 inputbox stylebutton"} value="3" onClick={HandleColor}>{props.CurrQuestion.Option3}</button>
                    </div>
                    <div className="col-md-6">
                        <button type="button" className={col.option4 ? "Answer btn col-8 inputbox stylebutton":"btn btn-outline col-8 inputbox stylebutton"} value="4" onClick={HandleColor}>{props.CurrQuestion.Option4}</button>
                    </div>     
                </form>
            </div>
        </div>  
    );
    }
    else{
        return(
            <div>
                <div className="mcqbox">
                    <form className="row g-3">
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label inputbox">Select Correct Answer 💡</label>
                            <input type="text" className="form-control inputbox" placeholder="Enter Your Question Here" name="Question" value={props.CurrQuestion.Question} disabled readonly />
                        </div>
                        <div className="col-12">
                            <input type="text" className="form-control inputbox" placeholder="Enter The Answer Here" name="Answer" value={props.CurrQuestion.Answer} onChange={HandleChange}/>
                        </div>
                    </form>
                </div>
            </div>  
        );
    }
}

export default AnswerSelection;