const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Load products data
const productsPath = path.join(__dirname, '../data/products.json');
const getProducts = () => {
  const data = fs.readFileSync(productsPath, 'utf8');
  return JSON.parse(data).products;
};

// Get all products
router.get('/', (req, res) => {
  try {
    const products = getProducts();
    const { category, search, minPrice, maxPrice } = req.query;
    
    let filteredProducts = products;
    
    // Filter by category
    if (category) {
      filteredProducts = filteredProducts.filter(p => p.category === category);
    }
    
    // Filter by search term
    if (search) {
      const searchLower = search.toLowerCase();
      filteredProducts = filteredProducts.filter(p => 
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower)
      );
    }
    
    // Filter by price range
    if (minPrice) {
      filteredProducts = filteredProducts.filter(p => p.price >= parseFloat(minPrice));
    }
    if (maxPrice) {
      filteredProducts = filteredProducts.filter(p => p.price <= parseFloat(maxPrice));
    }
    
    res.json(filteredProducts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Get single product by ID
router.get('/:id', (req, res) => {
  try {
    const products = getProducts();
    const product = products.find(p => p.id === parseInt(req.params.id));
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// Get featured products
router.get('/featured/list', (req, res) => {
  try {
    const products = getProducts();
    // Return first 6 products as featured
    res.json(products.slice(0, 6));
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch featured products' });
  }
});

module.exports = router;
