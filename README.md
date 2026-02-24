# Electracon - E-Commerce Electrical Products Website

A modern, dynamic full-stack e-commerce website for electrical products built with React and Node.js.

## Features

- **Dynamic Product Catalog**: Browse through various electrical products with filtering and search
- **Category-based Navigation**: Products organized by categories (Lighting, Fans, Switches, Wires & Cables)
- **Shopping Cart**: Add products to cart, update quantities, and remove items
- **Product Details**: Detailed product pages with specifications
- **Checkout System**: Complete checkout process with shipping information
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **RESTful API**: Backend API for product management and order processing

## Tech Stack

### Frontend
- React 18
- React Router for navigation
- Axios for API calls
- CSS3 for styling

### Backend
- Node.js
- Express.js
- CORS middleware
- JSON-based data storage

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm

### Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/anikamustudy/eletracon.git
cd eletracon
```

2. Install backend dependencies:
```bash
npm install
```

3. Install frontend dependencies:
```bash
cd client
npm install
cd ..
```

4. Start the development servers:

**Option 1: Run both servers separately**

Terminal 1 (Backend):
```bash
npm run server
```

Terminal 2 (Frontend):
```bash
npm run client
```

**Option 2: Run both servers concurrently**
```bash
npm run dev
```

5. Open your browser and navigate to:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

### Products
- `GET /api/products` - Get all products (supports filtering)
- `GET /api/products/:id` - Get single product
- `GET /api/products/featured/list` - Get featured products

### Categories
- `GET /api/categories` - Get all categories

### Cart
- `GET /api/cart/:userId` - Get user cart
- `POST /api/cart/:userId/add` - Add item to cart
- `PUT /api/cart/:userId/update` - Update cart item
- `DELETE /api/cart/:userId/remove/:productId` - Remove item from cart
- `DELETE /api/cart/:userId/clear` - Clear cart

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:userId` - Get user orders
- `GET /api/orders/order/:orderId` - Get single order

## Project Structure

```
eletracon/
├── server/
│   ├── server.js           # Express server setup
│   ├── routes/             # API routes
│   │   ├── products.js
│   │   ├── categories.js
│   │   ├── cart.js
│   │   └── orders.js
│   └── data/
│       └── products.json   # Product database
├── client/
│   ├── public/
│   └── src/
│       ├── components/     # React components
│       │   ├── Header.js
│       │   ├── Footer.js
│       │   └── ProductCard.js
│       ├── pages/          # Page components
│       │   ├── Home.js
│       │   ├── Products.js
│       │   ├── ProductDetail.js
│       │   ├── Cart.js
│       │   └── Checkout.js
│       ├── services/       # API services
│       │   └── api.js
│       ├── App.js
│       └── App.css
├── package.json
└── README.md
```

## Usage

### Browsing Products
- Visit the home page to see featured products and categories
- Click on a category to filter products
- Use the search bar to find specific products

### Adding to Cart
- Click "Add to Cart" on any product card
- Adjust quantities on the product detail page
- View cart by clicking the cart icon in the header

### Checkout
- Review your cart items
- Click "Proceed to Checkout"
- Fill in shipping information
- Select payment method
- Place order

## Development

### Adding New Products
Edit `server/data/products.json` to add new products with the following structure:

```json
{
  "id": 1,
  "name": "Product Name",
  "category": "category-id",
  "price": 999,
  "description": "Product description",
  "image": "/images/product.jpg",
  "stock": 50,
  "brand": "Brand Name",
  "specifications": {
    "key": "value"
  }
}
```

### Customization
- Modify colors in CSS files to match your brand
- Update logo in Header component
- Add more categories in `server/routes/categories.js`

## Future Enhancements

- User authentication and accounts
- Product reviews and ratings
- Wishlist functionality
- Payment gateway integration
- Admin dashboard for product management
- Order tracking
- Database integration (MongoDB/PostgreSQL)
- Email notifications
- Advanced search and filters

## License

ISC

## Author

Electracon Team

## Support

For issues and questions, please open an issue on GitHub. 
