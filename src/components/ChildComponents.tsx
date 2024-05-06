import React from 'react';
interface ChildProps {
    users: {
      id: number;
      name: string;
      address: string;
      email: string;
    }[];
  }
class ChildComponent extends React.Component<ChildProps> {
  render() {
    // Nhận prop từ component cha
    const { users } = this.props;

    return (
      <div>
        {/* Render danh sách user */}
        <h2>Exercise06:</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <th>Tên: {user.name}</th>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ChildComponent;
