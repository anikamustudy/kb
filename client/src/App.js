import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import './App.css';

function App() {
  const [cart, setCart] = useState({ items: [], total: 0 });

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const addToCart = (product, quantity = 1) => {
    const existingItemIndex = cart.items.findIndex(
      item => item.productId === product.id
    );

    let newItems;
    if (existingItemIndex > -1) {
      newItems = [...cart.items];
      newItems[existingItemIndex].quantity += quantity;
    } else {
      newItems = [...cart.items, {
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity
      }];
    }

    const newTotal = newItems.reduce(
      (sum, item) => sum + (item.price * item.quantity), 0
    );

    updateCart({ items: newItems, total: newTotal });
  };

  const removeFromCart = (productId) => {
    const newItems = cart.items.filter(item => item.productId !== productId);
    const newTotal = newItems.reduce(
      (sum, item) => sum + (item.price * item.quantity), 0
    );
    updateCart({ items: newItems, total: newTotal });
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    const newItems = cart.items.map(item =>
      item.productId === productId ? { ...item, quantity } : item
    );
    const newTotal = newItems.reduce(
      (sum, item) => sum + (item.price * item.quantity), 0
    );
    updateCart({ items: newItems, total: newTotal });
  };

  const clearCart = () => {
    updateCart({ items: [], total: 0 });
  };

  return (
    <Router>
      <div className="App">
        <Header cartItemCount={cart.items.length} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products addToCart={addToCart} />} />
            <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
            <Route 
              path="/cart" 
              element={
                <Cart 
                  cart={cart} 
                  updateQuantity={updateCartQuantity}
                  removeItem={removeFromCart}
                />
              } 
            />
            <Route 
              path="/checkout" 
              element={<Checkout cart={cart} clearCart={clearCart} />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
