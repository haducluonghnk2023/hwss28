import React from 'react'
import Functional from './components/Functional'
import Class from './components/Class'
import StateFunction from './components/StateFunction'
import StateClass from './components/StateClass';
export default function App() {
  const fullName:string = "hoa";
  const students:string[] = ["thu","hoa","ngoc"]
  const number:number[] = [1,2,3,4]
  const age:number = 25;
  return (
    <div>App

      <Functional name = {fullName} students = {students}></Functional>
      <Class age={age} number = {number}></Class>
      <StateFunction></StateFunction>
      <StateClass></StateClass>
    </div>
  )
}
