const express = require('express');
const router = express.Router();

// In-memory orders storage (in production, use database)
let orders = [];
let orderIdCounter = 1;

// Get all orders for a user
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const userOrders = orders.filter(order => order.userId === userId);
  res.json(userOrders);
});

// Create new order
router.post('/', (req, res) => {
  const { userId, items, total, shippingAddress, paymentMethod } = req.body;
  
  const newOrder = {
    id: orderIdCounter++,
    userId,
    items,
    total,
    shippingAddress,
    paymentMethod,
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

// Get single order
router.get('/order/:orderId', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.orderId));
  
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }
  
  res.json(order);
});

module.exports = router;
