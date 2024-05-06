// File: Product.js
import React from 'react';
interface ProductProps {
    product: {
      id: number;
      name: string;
      price: number;
      quantity: number;
    };
  }
const Product : React.FC<ProductProps> = ({ product }) => {
  return (
    <div>
      {/* Hiển thị thông tin của sản phẩm */}
      <h3>{product.name}</h3>
      <p>Giá: {product.price}</p>
      <p>Số lượng: {product.quantity}</p>
    </div>
  );
}

export default Product;
