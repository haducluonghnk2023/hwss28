import React from 'react'
import Functional from './components/Functional'
import Class from './components/Class'
import StateFunction from './components/StateFunction'
import StateClass from './components/StateClass';
import B1 from './components/Exercise01';
import Exercise02 from './components/Exercise02';
import Exercise03 from './components/Exercise03';
import Exercise04 from './components/Exercise04';
import Exercise05 from './components/Exercise05';
import Exercise06 from './components/Exercise06';
import Exercise07 from './components/Exercise07';
import Exercise08 from './components/Exercise08';
import Exercise09 from './components/Exercise09';
// import Exercise10 from './components/Exercise10';
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
      <B1></B1>
      <Exercise02></Exercise02>
      <Exercise03></Exercise03>
      <Exercise04></Exercise04>
      <Exercise05></Exercise05>
      <Exercise06></Exercise06>
      <Exercise07></Exercise07>
      <Exercise08></Exercise08>
      <Exercise09></Exercise09>
      {/* <Exercise10></Exercise10> */}

    </div>
  )
}
