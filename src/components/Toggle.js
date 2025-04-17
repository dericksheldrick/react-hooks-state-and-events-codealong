import React from "react";
import { useState } from "react";

function Toggle() {

  const [isOn, setIsOn] = useState()

  function handleClick(event){
    setIsOn((isOn) => !isOn) // this is a setter function takes the variable isOn 

  }

  const color = isOn ? "red" : "white"; 

  return <button onClick={handleClick} style={{background:color}}>{isOn ? "On" : "Off"}</button>;//instead of writing off I should use tenary so that the word can also rendered to reflect the condition
}

export default Toggle;
