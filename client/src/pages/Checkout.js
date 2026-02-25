import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = ({ cart, clearCart }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod'
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real application, you would send this to your backend
    console.log('Order placed:', { ...formData, cart });
    
    setOrderPlaced(true);
    clearCart();
    
    // Redirect to home after 3 seconds
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (cart.items.length === 0 && !orderPlaced) {
    navigate('/cart');
    return null;
  }

  if (orderPlaced) {
    return (
      <div className="checkout-page">
        <div className="container">
          <div className="order-success">
            <div className="success-icon">✓</div>
            <h1>अर्डर सफलतापूर्वक राखियो!</h1>
            <p>तपाईंको अर्डरको लागि धन्यवाद। छिट्टै पुष्टि इमेल प्राप्त हुनेछ।</p>
            <p className="redirect-message">गृहपृष्ठमा फर्किँदै...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <h1 className="page-title">भुक्तानी</h1>

        <div className="checkout-layout">
          <div className="checkout-form card">
            <h2>ढुवानी जानकारी</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>पूरा नाम *</label>
                <input
                  type="text"
                  name="fullName"
                  className="form-control"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>इमेल *</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>फोन *</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>ठेगाना *</label>
                <textarea
                  name="address"
                  className="form-control"
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>सहर *</label>
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>प्रदेश *</label>
                  <input
                    type="text"
                    name="state"
                    className="form-control"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>पिनकोड *</label>
                  <input
                    type="text"
                    name="pincode"
                    className="form-control"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <h3>भुक्तानी विधि</h3>
                <div className="payment-methods">
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                    />
                    <span>घरमा नगद भुक्तानी</span>
                  </label>

                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="online"
                      checked={formData.paymentMethod === 'online'}
                      onChange={handleChange}
                    />
                    <span>अनलाइन भुक्तानी</span>
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-lg">
                अर्डर गर्नुहोस्
              </button>
            </form>
          </div>

          <div className="order-summary-checkout card">
            <h2>अर्डर सारांश</h2>
            
            <div className="checkout-items">
              {cart.items.map(item => (
                <div key={item.productId} className="checkout-item">
                  <div className="checkout-item-details">
                    <div className="checkout-item-name">{item.name}</div>
                    <div className="checkout-item-qty">मात्रा: {item.quantity}</div>
                  </div>
                  <div className="checkout-item-price">रु.{item.price * item.quantity}</div>
                </div>
              ))}
            </div>

            <div className="summary-divider"></div>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
