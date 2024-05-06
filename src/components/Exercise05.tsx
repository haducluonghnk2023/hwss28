import React from 'react';
import ChildComponent from './ChildrenComponents';

class ParentComponent extends React.Component {
  render() {
    // Giả sử bạn đã có một đối tượng product như sau:
    const product = {
      id: 1,
      name: 'Nguyen Van A',
      price: 10,
      quantity: 5
    };

    return (
      <div>
        {/* Truyền prop product cho component con */}
        <ChildComponent product={product} />
      </div>
    );
  }
}

export default ParentComponent;
