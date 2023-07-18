import React from "react";
import "./style.css";
import{useState} from "react";

export default function App() {
  let time = new Date().toLocaleTimeString();

  const[currenttime, setCurrenttime] = useState(time);
  const[session, setSession] =useState("PM")

  const updateTime=()=>{
let time = new Date().toLocaleTimeString();
setCurrenttime(time);


  }
setInterval(updateTime,1000);



  return (
    <div>
      <h3> Digital Clock</h3>
      <h1>{time}</h1>
  


    </div>
  );
}
