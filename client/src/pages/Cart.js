import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cart, updateQuantity, removeItem }) => {
  if (cart.items.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <h1 className="page-title">किनमेल कार्ट</h1>
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>तपाईंको कार्ट खाली छ</h2>
            <p>सुरु गर्न केही उत्पादनहरू थप्नुहोस्!</p>
            <Link to="/products" className="btn btn-primary">
              किनमेल जारी राख्नुहोस्
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="page-title">किनमेल कार्ट</h1>

        <div className="cart-layout">
          <div className="cart-items">
            {cart.items.map(item => (
              <div key={item.productId} className="cart-item card">
                <div className="cart-item-image">
                  <div className="image-placeholder">
                    <span>📦</span>
                  </div>
                </div>

                <div className="cart-item-details">
                  <Link to={`/products/${item.productId}`} className="cart-item-name">
                    {item.name}
                  </Link>
                  <div className="cart-item-price">रु.{item.price}</div>
                </div>

                <div className="cart-item-quantity">
                  <button 
                    onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                    className="qty-btn"
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.productId, parseInt(e.target.value) || 1)}
                    min="1"
                  />
                  <button 
                    onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                    className="qty-btn"
                  >
                    +
                  </button>
                </div>

                <div className="cart-item-total">
                  रु.{item.price * item.quantity}
                </div>

                <button 
                  onClick={() => removeItem(item.productId)}
                  className="cart-item-remove"
                  title="Remove item"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary card">
            <h2>अर्डर सारांश</h2>
            
            <div className="summary-row">
              <span>उप-कुल:</span>
              <span>रु.{cart.total}</span>
            </div>
            
            <div className="summary-row">
              <span>ढुवानी:</span>
              <span>नि:शुल्क</span>
            </div>
            
            <div className="summary-row summary-total">
              <span>कुल:</span>
              <span>रु.{cart.total}</span>
            </div>

            <Link to="/checkout" className="btn btn-primary btn-lg">
              भुक्तानीमा जानुहोस्
            </Link>

            <Link to="/products" className="btn btn-outline">
              किनमेल जारी राख्नुहोस्
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
