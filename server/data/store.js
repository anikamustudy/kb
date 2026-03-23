// Shared in-memory data store
// In production, replace with a real database

const store = {
  orders: [],
  orderIdCounter: 1
};

module.exports = store;
