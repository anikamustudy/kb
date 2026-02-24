const express = require('express');
const router = express.Router();

// In-memory cart storage (in production, use database)
let carts = {};

// Get cart
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const cart = carts[userId] || { items: [], total: 0 };
  res.json(cart);
});

// Add to cart
router.post('/:userId/add', (req, res) => {
  const { userId } = req.params;
  const { productId, quantity, productDetails } = req.body;
  
  if (!carts[userId]) {
    carts[userId] = { items: [], total: 0 };
  }
  
  const existingItemIndex = carts[userId].items.findIndex(
    item => item.productId === productId
  );
  
  if (existingItemIndex > -1) {
    carts[userId].items[existingItemIndex].quantity += quantity;
  } else {
    carts[userId].items.push({
      productId,
      quantity,
      ...productDetails
    });
  }
  
  // Calculate total
  carts[userId].total = carts[userId].items.reduce(
    (sum, item) => sum + (item.price * item.quantity), 0
  );
  
  res.json(carts[userId]);
});

// Update cart item
router.put('/:userId/update', (req, res) => {
  const { userId } = req.params;
  const { productId, quantity } = req.body;
  
  if (!carts[userId]) {
    return res.status(404).json({ error: 'Cart not found' });
  }
  
  const itemIndex = carts[userId].items.findIndex(
    item => item.productId === productId
  );
  
  if (itemIndex > -1) {
    if (quantity <= 0) {
      carts[userId].items.splice(itemIndex, 1);
    } else {
      carts[userId].items[itemIndex].quantity = quantity;
    }
    
    // Calculate total
    carts[userId].total = carts[userId].items.reduce(
      (sum, item) => sum + (item.price * item.quantity), 0
    );
  }
  
  res.json(carts[userId]);
});

// Remove from cart
router.delete('/:userId/remove/:productId', (req, res) => {
  const { userId, productId } = req.params;
  
  if (!carts[userId]) {
    return res.status(404).json({ error: 'Cart not found' });
  }
  
  carts[userId].items = carts[userId].items.filter(
    item => item.productId !== parseInt(productId)
  );
  
  // Calculate total
  carts[userId].total = carts[userId].items.reduce(
    (sum, item) => sum + (item.price * item.quantity), 0
  );
  
  res.json(carts[userId]);
});

// Clear cart
router.delete('/:userId/clear', (req, res) => {
  const { userId } = req.params;
  carts[userId] = { items: [], total: 0 };
  res.json(carts[userId]);
});

module.exports = router;
