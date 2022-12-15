import React from "react";
import './sidebars.css';
function SideBar(props){

    const HandleCreateQuiz=()=>{
        props.setDisplay("CreateQuiz");
    }
    const HandleViewQuiz=()=>{
        props.setDisplay("ViewQuiz");
    }
    const HandleProfile=()=>{
        props.setDisplay("Profile");
    }
    const HandleLogout=()=>{
        props.setDisplay("Logout");
    }
    return ( 
        <div className="Sidebar ">
            <hr style={{ backgroundColor: "pink", height: 5}}/>
            <div>
                <ul style={{listStyle:"none",float:"left"}}>
                    <li className="Main">Quiz</li>
                    <li className="icons"><button onClick={HandleCreateQuiz}><img src="https://img.icons8.com/external-smashingstocks-circular-smashing-stocks/47/000000/external-quiz-education-smashingstocks-circular-smashing-stocks.png"/> Create Quiz</button></li>
                    <li className="icons"><button onClick={HandleViewQuiz}><img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/40/000000/external-quiz-online-learning-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"/> View Quiz</button></li>
                    <li className="Main">User</li>
                    <li className="icons"><button onClick={HandleProfile}> <img src="https://img.icons8.com/color/48/undefined/user-male-circle--v1.png"/> Profile</button></li>
                    <li className="icons"><button onClick={HandleLogout}> <img src="https://img.icons8.com/plasticine/48/undefined/exit.png"/> Logout</button></li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;