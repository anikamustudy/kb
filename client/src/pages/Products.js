import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productService, categoryService } from '../services/api';
import ProductCard from '../components/ProductCard';
import './Products.css';

const Products = ({ addToCart }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    search: searchParams.get('search') || '',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || ''
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await categoryService.getAllCategories();
        setCategories(res.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const params = {};
        if (filters.category) params.category = filters.category;
        if (filters.search) params.search = filters.search;
        if (filters.minPrice) params.minPrice = filters.minPrice;
        if (filters.maxPrice) params.maxPrice = filters.maxPrice;

        const res = await productService.getAllProducts(params);
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters]);

  const handleFilterChange = (name, value) => {
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    
    // Update URL params
    const params = {};
    Object.keys(newFilters).forEach(key => {
      if (newFilters[key]) params[key] = newFilters[key];
    });
    setSearchParams(params);
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      search: '',
      minPrice: '',
      maxPrice: ''
    });
    setSearchParams({});
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="products-page">
      <div className="container">
        <h1 className="page-title">हाम्रा उत्पादनहरू</h1>

        <div className="products-layout">
          {/* Filters Sidebar */}
          <aside className="filters-sidebar">
            <div className="filter-section">
              <h3>खोज्नुहोस्</h3>
              <input
                type="text"
                className="form-control"
                placeholder="उत्पादन खोज्नुहोस्..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
              />
            </div>

            <div className="filter-section">
              <h3>श्रेणी</h3>
              <select
                className="form-control"
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
              >
                <option value="">सबै श्रेणीहरू</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>

            <div className="filter-section">
              <h3>मूल्य दायरा</h3>
              <div className="price-inputs">
                <input
                  type="number"
                  className="form-control"
                  placeholder="न्यूनतम"
                  value={filters.minPrice}
                  onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                />
                <span>देखि</span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="अधिकतम"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                />
              </div>
            </div>

            <button className="btn btn-secondary" onClick={clearFilters}>
              फिल्टर हटाउनुहोस्
            </button>
          </aside>

          {/* Products Grid */}
          <div className="products-content">
            {products.length === 0 ? (
              <div className="no-products">
                <p>तपाईंको फिल्टरसँग मेल खाने कुनै उत्पादन फेला परेन।</p>
              </div>
            ) : (
              <>
                <div className="products-header">
                  <p>{products.length} उत्पादनहरू फेला परे</p>
                </div>
                <div className="products-grid grid grid-3">
                  {products.map(product => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      addToCart={addToCart}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
