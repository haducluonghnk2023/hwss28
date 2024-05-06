import React, { Component } from 'react'
interface ClassComponent {
    name:string,
    age:number,
    address:string,
    count:number
}
export default class StateClass extends Component<any,ClassComponent> {
    constructor(props:ClassComponent){
        super(props)
        this.state = {
            name: 'hoa',
            age: 20,
            address: '123 street',
            count:1
        }
    }
    // noi khai bao nhung  phuong thuc 
    // setState ({})
    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
  render() {
    return (
      <div>StateClass
        <p>xin chao {this.state.name}</p>
        <p>gia tri count ban dau {this.state.count}</p>
        <button onClick={this.handleClick}>increase</button>
      </div>
    )
  }
}
