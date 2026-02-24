# Electracon E-Commerce Website - Setup Guide

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/anikamustudy/eletracon.git
   cd eletracon
   ```

2. **Install all dependencies:**
   ```bash
   # Install backend dependencies
   npm install

   # Install frontend dependencies
   cd client
   npm install
   cd ..
   ```

### Running the Application

#### Run Both Servers Separately (Recommended for Development)

**Terminal 1 - Backend Server:**
```bash
npm run server
```
The backend API will start on http://localhost:5000

**Terminal 2 - Frontend React App:**
```bash
npm run client
```
The frontend will start on http://localhost:3000 and automatically open in your browser.

### Testing the Application

1. **Visit the homepage:** http://localhost:3000
2. **Browse products:** Click "Products" in the navigation
3. **Filter products:** Use the search bar, category dropdown, or price range filters
4. **View product details:** Click on any product card
5. **Add to cart:** Click "Add to Cart" button
6. **View cart:** Click the cart icon in the navigation
7. **Checkout:** Click "Proceed to Checkout" and fill in the form

### API Testing

Test the backend API directly:

```bash
# Health check
curl http://localhost:5000/api/health

# Get all products
curl http://localhost:5000/api/products

# Get products by category
curl http://localhost:5000/api/products?category=lighting

# Get single product
curl http://localhost:5000/api/products/1

# Get categories
curl http://localhost:5000/api/categories
```

## Project Structure

```
eletracon/
├── server/                 # Backend Express server
│   ├── server.js          # Main server file
│   ├── routes/            # API routes
│   │   ├── products.js
│   │   ├── categories.js
│   │   ├── cart.js
│   │   └── orders.js
│   └── data/              # JSON data storage
│       └── products.json
├── client/                # React frontend
│   ├── public/           # Static files
│   └── src/
│       ├── components/   # Reusable components
│       │   ├── Header.js
│       │   ├── Footer.js
│       │   └── ProductCard.js
│       ├── pages/        # Page components
│       │   ├── Home.js
│       │   ├── Products.js
│       │   ├── ProductDetail.js
│       │   ├── Cart.js
│       │   └── Checkout.js
│       ├── services/     # API service layer
│       │   └── api.js
│       ├── App.js        # Main app component
│       └── App.css       # Global styles
├── package.json          # Backend dependencies
└── README.md            # Project documentation
```

## Available Scripts

### Backend (root directory)
- `npm run server` - Start the Express server
- `npm start` - Start the server (production)

### Frontend (client directory)
- `npm start` - Start React development server
- `npm run build` - Build for production
- `npm test` - Run tests

## Configuration

### Backend Port
Default: 5000
Change in `server/server.js`:
```javascript
const PORT = process.env.PORT || 5000;
```

### Frontend API URL
Default: http://localhost:5000/api
Change in `client/src/services/api.js`:
```javascript
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
```

## Features

✅ Dynamic product catalog with 12 products
✅ 4 product categories (Lighting, Fans, Switches, Wires & Cables)
✅ Product search and filtering
✅ Shopping cart with localStorage persistence
✅ Detailed product pages with specifications
✅ Checkout process with shipping form
✅ Responsive design for all devices
✅ RESTful API with Express

## Next Steps

1. Add user authentication
2. Integrate payment gateway
3. Add product images
4. Implement database (MongoDB/PostgreSQL)
5. Add admin dashboard
6. Deploy to production

## Support

For issues or questions, please open an issue on GitHub:
https://github.com/anikamustudy/eletracon/issues
