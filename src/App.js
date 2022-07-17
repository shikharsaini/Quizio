import logo from './logo.svg';
import './App.css';
import Login_Box from './Pages/Login_box';
import {BrowserRouter as Router, Routes, Navigate, Route} from "react-router-dom";
import HomePage from './Pages/HomePage';
import { useState } from 'react';
import Quiz from './Pages/Quiz';
import StartPage from './Pages/StartPage';
import Navbar from './Components/Navbar';
import EndQuiz from './Pages/EndQuiz';
import Leaderboard from './Pages/Leaderboard';
import AccessViaLink from './Components/AccessViaLink';
function App() {

  const [userData, setUserData]=useState({
    name:"",
    email:"",
    password:"",
    id:""
  });

  return (
    <div className="App">
      <div className="wrapper vcenter-item"> 
      <Navbar/>
          <Routes>
            <Route exact path='/AccessViaLink' element={<AccessViaLink/>} /> 
            <Route path='/' element={<StartPage/>} />
            <Route path='/Login' element={<Login_Box type="login" setUserData={setUserData} />} />
            <Route path='/Register' element={<Login_Box type="register" setUserData={setUserData} />} />
            <Route exact path="/HomePage" element={userData.name!=""?<HomePage userData={userData} setUserData={setUserData}/>:<Navigate to="/" />}/>
            <Route exact path='/QuizPlatform' element={<Quiz/>} /> 
            <Route exact path='/EndQuiz' element={<EndQuiz/>} /> 
            <Route exact path='/ViewLeaderboard' element={<Leaderboard/>} />
          </Routes>
      </div>
    </div>
  );
}
export default App;
