import React from 'react'

export default function B1() {
    const [fullName,setFullName] = React.useState<string>("Hạ Đức Lương")
  return (
    <div>
      <h2>Exercise01</h2>
        <h3>Họ và tên : {fullName}</h3>
    </div>
  )
}
