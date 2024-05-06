import React from 'react'

export default function Excercise03() {
    const [users, setUsers] = React.useState([
        { id: 1, name: 'Luong', address: 'phu tho' },
        { id: 2, name: 'nam', address: 'ha noi' },
        { id: 3, name: 'hoa', address: 'tphcm' }
      ]);
  return (
    <div>
        <h2>Excercise03</h2>
        <ul>
            {users.map(user =>(
                <li key={user.id}>
                    Name: {user.name}
                </li>
            ))}
        </ul>
    </div>
  )
}
