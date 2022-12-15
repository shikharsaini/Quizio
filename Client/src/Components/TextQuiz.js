import React from "react";
import './MCQquiz.css';
function TextQuiz(props){
    const HandleChange=(e)=>{
        const {name,value}=e.target;
        props.setCurrQuestion({
            ...props.CurrQuestion,
            [name]:value
        })
    }
    return (
        <div className="mcqbox">
            <form className="row g-3">
                <div className="col-12 questionbox">
                    <label htmlFor="inputAddress" className="Typeselect"><img src="https://img.icons8.com/plasticine/60/000000/questions.png"/> Input Question</label>
                    <input type="text" className="form-control inputbox" placeholder=" 🙋 Enter Your Question Here" name="Question" value={props.CurrQuestion.Question} onChange={HandleChange}/>
                </div>     
            </form>
        </div>
    );
}

export default TextQuiz;