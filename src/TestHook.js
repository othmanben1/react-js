import React,{useState} from 'react'
import {ReacrDOM} from 'react'

function TestHook(){

  const [Car,setCar]= useState({
    Module : "Mercedes",
    Marque : "222",
    Mat : "IG 23662"
  })
  const modifier=()=>{
    setCar(perInt=>{
      const obj={...perInt,Marque:"777"};
      return obj;
    }
    )
  }
  return(
    <div>
       <h1>Module : {Car.Module}</h1>
       <h1>Marque : {Car.Marque}</h1>
       <h1>Matricule: {Car.Mat}</h1>
       <button onClick={modifier}>Change</button>
    </div>
  )
}
export default TestHook;