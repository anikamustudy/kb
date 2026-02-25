import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productService } from '../services/api';
import './ProductDetail.css';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await productService.getProduct(id);
        setProduct(res.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container">
        <div className="not-found">
          <h2>उत्पादन फेला परेन</h2>
          <Link to="/products" className="btn btn-primary">उत्पादनहरूमा फर्कनुहोस्</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">गृहपृष्ठ</Link> / 
          <Link to="/products">उत्पादनहरू</Link> / 
          <span>{product.name}</span>
        </div>

        {addedToCart && (
          <div className="alert alert-success">
            उत्पादन कार्टमा सफलतापूर्वक थपियो!
          </div>
        )}

        <div className="product-detail">
          <div className="product-detail-image">
            <div className="image-placeholder">
              <span className="placeholder-icon">📦</span>
            </div>
          </div>

          <div className="product-detail-info">
            <h1 className="product-title">{product.name}</h1>
            <div className="product-brand">ब्रान्ड: {product.brand}</div>
            <div className="product-price-large">रू {product.price}</div>
            
            <div className="product-description-full">
              <h3>विवरण</h3>
              <p>{product.description}</p>
            </div>

            <div className="product-specifications">
              <h3>विशिष्टताहरू</h3>
              <ul>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="product-stock">
              {product.stock > 0 ? (
                <span className="in-stock">✓ स्टकमा छ ({product.stock} उपलब्ध)</span>
              ) : (
                <span className="out-of-stock">✗ स्टक सकियो</span>
              )}
            </div>

            <div className="product-actions">
              <div className="quantity-selector">
                <label>मात्रा:</label>
                <div className="quantity-controls">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="qty-btn"
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    min="1"
                    max={product.stock}
                  />
                  <button 
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="qty-btn"
                  >
                    +
                  </button>
                </div>
              </div>

              <button 
                className="btn btn-primary btn-lg"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
              >
                कार्टमा थप्नुहोस्
              </button>

              <Link to="/cart" className="btn btn-outline btn-lg">
                कार्ट हेर्नुहोस्
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
