import React from 'react';
import ChildComponent from './ChildComponents';

class ParentComponent extends React.Component {
  render() {
    // Khai báo mảng user
    const users = [
      { id: 1, name: "minh", address: "hn", email: "minh@example.com" },
      { id: 2, name: "phuc", address: "hue", email: "phuc@example.com" },
      { id: 3, name: "luong", address: "pt", email: "luong@example.com" }
    ];

    return (
      <div>
        {/* Truyền prop users vào component con */}
        <ChildComponent users={users} />
      </div>
    );
  }
}

export default ParentComponent;
