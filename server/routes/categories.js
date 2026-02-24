const express = require('express');
const router = express.Router();

// Get all categories
router.get('/', (req, res) => {
  const categories = [
    {
      id: 'sari',
      name: 'Sari',
      description: 'Silk, cotton, Banarasi and designer saris',
      icon: '🥻'
    },
    {
      id: 'kurtha',
      name: 'Kurtha',
      description: 'Anarkali, straight-fit and designer kurthas',
      icon: '👘'
    },
    {
      id: 'sirak',
      name: 'Sirak',
      description: 'Embroidered and printed traditional siraks',
      icon: '✨'
    },
    {
      id: 'dasana',
      name: 'Dasana',
      description: 'Bridal and festive dasana sets',
      icon: '💎'
    },
    {
      id: 'chakla',
      name: 'Chakla',
      description: 'Handwoven and silk chaklas',
      icon: '🌸'
    }
  ];
  
  res.json(categories);
});

module.exports = router;
