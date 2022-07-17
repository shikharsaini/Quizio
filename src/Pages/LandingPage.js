import React from "react";
import './HomePage.css';
function LandingPage(props){
    return (
        <div>
            <h1 className="h1Heading">Hello {props.userData.name}</h1>
            <h1 className="h1subHeading">Welcome To Quizio</h1>
            <h1 className="h1subHeading" style={{color:"purple"}}>What Would You Like To Do Today?</h1>
        </div>
    );
}

export default LandingPage;