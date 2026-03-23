import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const productService = {
  getAllProducts: (params = {}) => api.get('/products', { params }),
  getProduct: (id) => api.get(`/products/${id}`),
  getFeaturedProducts: () => api.get('/products/featured/list'),
  searchProducts: (query) => api.get('/products', { params: { search: query } })
};

export const categoryService = {
  getAllCategories: () => api.get('/categories')
};

export const cartService = {
  getCart: (userId) => api.get(`/cart/${userId}`),
  addToCart: (userId, data) => api.post(`/cart/${userId}/add`, data),
  updateCart: (userId, data) => api.put(`/cart/${userId}/update`, data),
  removeFromCart: (userId, productId) => api.delete(`/cart/${userId}/remove/${productId}`),
  clearCart: (userId) => api.delete(`/cart/${userId}/clear`)
};

export const orderService = {
  createOrder: (data) => api.post('/orders', data),
  getUserOrders: (userId) => api.get(`/orders/${userId}`),
  getOrder: (orderId) => api.get(`/orders/order/${orderId}`)
};

export const adminService = {
  login: (credentials) => api.post('/admin/login', credentials),
  logout: (token) =>
    api.post('/admin/logout', {}, { headers: { Authorization: `Bearer ${token}` } }),
  getOrders: (token) =>
    api.get('/admin/orders', { headers: { Authorization: `Bearer ${token}` } }),
  updateOrderStatus: (token, orderId, status) =>
    api.put(
      `/admin/orders/${orderId}/status`,
      { status },
      { headers: { Authorization: `Bearer ${token}` } }
    )
};

export default api;
