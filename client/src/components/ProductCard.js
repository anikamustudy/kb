import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card card">
      <Link to={`/products/${product.id}`} className="product-image-link">
        <div className="product-image">
          <div className="image-placeholder">
            <span className="placeholder-icon">🥻</span>
          </div>
        </div>
      </Link>
      
      <div className="product-info">
        <Link to={`/products/${product.id}`} className="product-name-link">
          <h3 className="product-name">{product.name}</h3>
        </Link>
        <p className="product-description">{product.description.substring(0, 60)}...</p>
        
        <div className="product-footer">
          <div className="product-price">रु.{product.price}</div>
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => addToCart(product)}
          >
            कार्टमा थप्नुहोस्
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
