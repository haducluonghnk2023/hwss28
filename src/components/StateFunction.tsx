import React,{useState} from 'react'

export default function StateFunction() {
    const [number, setNumber] = useState<number>(0);
    const [fullName, setFullName] = useState<string>("minh thu");
    const handleClick = () => {
        setNumber(number + 1);
    }
  return (  
    <div>StateFunction
        <p>gia tri ban dau {number}</p>
        <button onClick={handleClick}>Tang</button>
        <p>xin chao {fullName}</p>
    </div>
  )
}
