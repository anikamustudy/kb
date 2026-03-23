const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const store = require('../data/store');

// Admin credentials — set ADMIN_USERNAME and ADMIN_PASSWORD in environment variables
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

// In-memory token store (in production, use a database or JWT)
const activeSessions = new Set();

// Middleware to verify admin token
const requireAdminAuth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token || !activeSessions.has(token)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

// POST /api/admin/login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const token = crypto.randomBytes(32).toString('hex');
    activeSessions.add(token);
    return res.json({ token });
  }

  res.status(401).json({ error: 'Invalid username or password' });
});

// POST /api/admin/logout
router.post('/logout', (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token) {
    activeSessions.delete(token);
  }
  res.json({ message: 'Logged out successfully' });
});

// GET /api/admin/orders  (protected)
router.get('/orders', requireAdminAuth, (req, res) => {
  res.json(store.orders);
});

const ALLOWED_STATUSES = new Set(['pending', 'processing', 'shipped', 'delivered', 'cancelled']);

// PUT /api/admin/orders/:orderId/status  (protected)
router.put('/orders/:orderId/status', requireAdminAuth, (req, res) => {
  const orderId = parseInt(req.params.orderId);
  const { status } = req.body;

  if (!status || !ALLOWED_STATUSES.has(status)) {
    return res.status(400).json({ error: 'Invalid status value' });
  }

  const order = store.orders.find(o => o.id === orderId);
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }

  order.status = status;
  res.json(order);
});

module.exports = router;
