import React, { Component } from 'react'
interface Component {
    id:number,
    name:string,
    dob:string,
    address:string,
}
export default class Exercise02 extends Component<any,Component> {
    constructor(props:Component){
        super(props);
        this.state = {
            id:1,
            name:"Lương",
            dob:"19/10/2004",
            address:"phú thọ",
        }
    }
  render() {
    return (
      <div>
        <h2>Exercise02</h2>
        <h3>Thông tin cá nhân</h3>
            <ul>
                <li>Id :{this.state.id}</li>
                <li>Họ và tên :{this.state.name}</li>
                <li>Ngày sinh :{this.state.dob}</li>
                <li>Địa chỉ :{this.state.address}</li>
            </ul>
      </div>
    )
  }
}
