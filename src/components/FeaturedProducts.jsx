import React from 'react';
import { featuredProducts } from '../data/data';

const FeaturedProducts = () => {
  return (
    <div className="featured-products">
      <div className="container">
        <h3>Awesome Products</h3>
        <h2>Featured Products</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
        {featuredProducts.map((product) => (
          <div className="product-item" key={product.id}>
            <div className="product-image">
              <div className="vertical-text">GET THE LATEST</div>
              <img src={product.img} alt={product.title} />
            </div>
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>{product.extraDescription}</p>
              <h4>Price:</h4>
              <p>
                <del>{product.oldPrice}</del> {product.newPrice}
              </p>
              <div className="button-group">
                <a href="#" className="btn btn2">View Details</a>
                <a href="#" className="btn">Add to Cart</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;