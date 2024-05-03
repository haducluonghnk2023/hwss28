import React, { Component } from 'react'

interface ClassComponent {
    age:number,
    number:number[],
}
export default class Class extends Component<ClassComponent> {
  render() {
    return (
        <div>Class
            <p>nam nay minh ngu {this.props.age} tuoi</p>
            <ul>
                {this.props.number.map((item,index)=>{
                    return <li key = {index} > {item} </li>
                })}
            </ul>
        </div>
    )
  }
}
