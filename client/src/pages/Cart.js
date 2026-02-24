import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cart, updateQuantity, removeItem }) => {
  if (cart.items.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <h1 className="page-title">Shopping Cart</h1>
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Add some products to get started!</p>
            <Link to="/products" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="page-title">Shopping Cart</h1>

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
                  <div className="cart-item-price">₹{item.price}</div>
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
                  ₹{item.price * item.quantity}
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
            <h2>Order Summary</h2>
            
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>₹{cart.total}</span>
            </div>
            
            <div className="summary-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            
            <div className="summary-row summary-total">
              <span>Total:</span>
              <span>₹{cart.total}</span>
            </div>

            <Link to="/checkout" className="btn btn-primary btn-lg">
              Proceed to Checkout
            </Link>

            <Link to="/products" className="btn btn-outline">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
