import React from 'react';
interface ProductChildProps {
    product: {
      id: number;
      name: string;
      price: number;
      quantity: number;
    };
}
class ChildComponent extends React.Component<ProductChildProps> {
  render() {
    // Nhận prop product từ component cha
    const { product } = this.props;

    return (
      <div>
        <h2>Exercise05:</h2>
        <th>Name: {product.name}</th>
      </div>
    );
  }
}

export default ChildComponent;