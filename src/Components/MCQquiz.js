import React from "react";
import './MCQquiz.css';

function MCQquiz(props){

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
                <div className="col-md-6">
                    <input type="text" className="form-control inputbox" placeholder="1️⃣ Option 1" name="Option1" value={props.CurrQuestion.Option1} onChange={HandleChange} />
                </div>
                <div className="col-md-6">
                    <input type="text" className="form-control inputbox" placeholder="2️⃣ Option 2" name="Option2" value={props.CurrQuestion.Option2} onChange={HandleChange}/>
                </div>
                <div className="col-md-6">
                    <input type="text" className="form-control inputbox" placeholder="3️⃣ Option 3" name="Option3" value={props.CurrQuestion.Option3} onChange={HandleChange} />
                </div>
                <div className="col-md-6">
                    <input type="text" className="form-control inputbox" placeholder="4️⃣ Option 4" name="Option4" value={props.CurrQuestion.Option4} onChange={HandleChange}/>
                </div>     
            </form>
        </div>
    );
}

export default MCQquiz;