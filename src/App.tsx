import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Studentdata } from './Interface/Student';
import Student from './Components/Student';
import "bootstrap/dist/css/bootstrap.min.css";

const App:React.FC=() =>{
  const allstudent:Studentdata[]=[
    {
      id:1,
      Name:"Alok",
      Address:"Cuttack",
      Age:25,
      MobileNumber:9687458965
    },
    {
      id:1,
      Name:"Rinku",
      Address:"Bhubaneswar",
      Age:23,
      MobileNumber:9963214741
    },
    {
      id:1,
      Name:"Amit",
      Address:"Puri",
      Age:24,
      MobileNumber:8748521478
    },
    {
      id:1,
      Name:"Ashoka",
      Address:"Jajpur",
      Age:26,
      MobileNumber:9987485200
    },
    {
      id:1,
      Name:"Arabinda",
      Address:"Angul",
      Age:23,
      MobileNumber:8852451078
    },
  ];
  return (
    <div className="App">
      <h1>Student Details</h1>
      <Student newStudent={allstudent}/>
    </div>
  );
}

export default App;
