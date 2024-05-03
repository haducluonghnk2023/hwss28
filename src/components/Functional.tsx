import React from 'react'
interface  Props {
    name:string,
    students:string[]
}
export default function Functional(props:Props) {
    console.log(props);
    // thay co' the dung` destructoring
    const { name } = props;
    const { students } = props;
  return (
    <div>Functional
        <p>xin chào {name}</p>
        {/* hieenr thi danh sach' sinh vien */}
        <ul>
            {students.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>
    </div>
  )
}
