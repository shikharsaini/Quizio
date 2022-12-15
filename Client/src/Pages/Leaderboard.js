import axios from "axios";
import React, { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import TableEntries from "../Components/TableEntries";
import './Leaderboard.css';
import { useNavigate } from "react-router-dom";
function Leaderboard(){
    const location = useLocation();
    var rank=0;
    const [studentList,setStudentList]=useState([]);
    useEffect(()=>{
        const url="http://localhost:9002/GetLeaderboard?QuizId="+location.state.QuizId;
        axios.get(url).then(res=>{
            console.log(res.data);
                if(res.data)
                {
                    setStudentList(studentList.concat(res.data.result));
                }
            });
    },[]);

    let history = useNavigate();
    const GoBack=()=>{
        history('/HomePage');
    }

    return (
        <div>
            <button onClick={GoBack} className="backbutton"><img src="https://img.icons8.com/external-others-phat-plus/40/000000/external-back-essential-color-line-others-phat-plus.png"/> Back</button>
            <h1><img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/60/000000/external-podium-racing-flaticons-lineal-color-flat-icons-2.png"/> LeaderBoard</h1>
            <div style={{width:"100%",margin:"6%",marginLeft:"30%"}}>
                <table>
                    <thead>
                    <tr className="tablesize">
                        <th className="tableheader">S.No</th>
                        <th className="tableheader">Name</th>
                        <th className="tableheader">Score</th>
                    </tr>
                    </thead>
                    <tbody>
                    {studentList.map((StudentDetails,key)=>(
                        <TableEntries  StudentDetails={StudentDetails} ind={key+1}/> 
                    ))}
                    
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Leaderboard;