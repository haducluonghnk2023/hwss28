// File: ListProduct.js
import React, { useState } from 'react';
import Product from './Products';

const ListProduct = () => {
  // Sử dụng state để lưu trữ danh sách sản phẩm
  const [products, setProducts] = useState([
    { id: 1, name: "Sản phẩm 1", price: 100, quantity: 10 },
    { id: 2, name: "Sản phẩm 2", price: 200, quantity: 20 },
    { id: 3, name: "Sản phẩm 3", price: 300, quantity: 30 }
  ]);

  return (
    <div>
      {/* Hiển thị danh sách sản phẩm */}
      <h2>Exercise08:</h2>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ListProduct;
