import React from 'react';
import { products } from '../data/data';

const Products = () => {
  return (
    <div className="products" id="products">
      <div className="container">
        <h3>Popular Products</h3>
        <h2>Our Products</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
        <div className="product-list">
          {products.map((product) => (
            <div className="product-item" key={product.id}>
              <img src={product.img} alt={product.title} />
              <h3>{product.title}</h3>
              <div className="rating">
                <span>{product.rating}</span>
                <span>{product.likes}</span>
              </div>
              <p>{product.description}</p>
              <div>
                <a href="#" className="btn">Cart</a>
                <a href="#" className="btn btn2">View</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;