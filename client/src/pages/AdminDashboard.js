import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const STATUS_LABELS = {
  pending: 'बाँकी',
  processing: 'प्रक्रियामा',
  shipped: 'पठाइयो',
  delivered: 'डेलिभर भयो',
  cancelled: 'रद्द गरियो'
};

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getToken = () => localStorage.getItem('adminToken');

  const fetchOrders = useCallback(async () => {
    const token = getToken();
    if (!token) {
      navigate('/admin');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/admin/orders`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.status === 401) {
        localStorage.removeItem('adminToken');
        navigate('/admin');
        return;
      }

      const data = await response.json();
      setOrders(data);
    } catch (err) {
      setError('अर्डरहरू लोड गर्न सकिएन');
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const handleStatusChange = async (orderId, newStatus) => {
    const token = getToken();
    try {
      const response = await fetch(`${API_URL}/admin/orders/${orderId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        const updated = await response.json();
        setOrders(prev => prev.map(o => (o.id === updated.id ? updated : o)));
      }
    } catch (err) {
      setError('स्थिति अपडेट गर्न सकिएन');
    }
  };

  const handleLogout = async () => {
    const token = getToken();
    try {
      await fetch(`${API_URL}/admin/logout`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (_) {
      // ignore
    }
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard-header">
        <div className="container">
          <div className="dashboard-header-content">
            <h1>🛠️ व्यवस्थापक ड्यासबोर्ड</h1>
            <button className="btn btn-outline btn-sm" onClick={handleLogout}>
              लगआउट
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-value">{orders.length}</div>
            <div className="stat-label">कुल अर्डर</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">
              {orders.filter(o => o.status === 'pending').length}
            </div>
            <div className="stat-label">बाँकी अर्डर</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">
              रु.{orders.reduce((sum, o) => sum + (o.total || 0), 0).toLocaleString()}
            </div>
            <div className="stat-label">कुल बिक्री</div>
          </div>
        </div>

        <div className="orders-section card">
          <h2>अर्डर सूची</h2>

          {error && <div className="admin-error">{error}</div>}

          {loading ? (
            <div className="loading-message">लोड हुँदैछ...</div>
          ) : orders.length === 0 ? (
            <div className="empty-message">अहिलेसम्म कुनै अर्डर छैन।</div>
          ) : (
            <div className="orders-table-wrapper">
              <table className="orders-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>ग्राहक</th>
                    <th>वस्तुहरू</th>
                    <th>कुल</th>
                    <th>भुक्तानी</th>
                    <th>मिति</th>
                    <th>स्थिति</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>
                        <div className="customer-info">
                          <strong>{order.shippingAddress?.fullName || '—'}</strong>
                          <span>{order.shippingAddress?.phone || ''}</span>
                        </div>
                      </td>
                      <td>{order.items?.length || 0} वस्तु</td>
                      <td>रु.{(order.total || 0).toLocaleString()}</td>
                      <td>
                        <span className={`payment-badge payment-${order.paymentMethod}`}>
                          {order.paymentMethod === 'cod' ? 'नगद' : 'अनलाइन'}
                        </span>
                      </td>
                      <td>
                        {order.createdAt
                          ? new Date(order.createdAt).toLocaleDateString('ne-NP', { year: 'numeric', month: 'short', day: 'numeric' })
                          : '—'}
                      </td>
                      <td>
                        <select
                          className={`status-select status-${order.status}`}
                          value={order.status}
                          onChange={e => handleStatusChange(order.id, e.target.value)}
                        >
                          {Object.entries(STATUS_LABELS).map(([value, label]) => (
                            <option key={value} value={value}>{label}</option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
