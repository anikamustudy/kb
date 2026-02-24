const express = require('express');
const router = express.Router();

// Get all categories
router.get('/', (req, res) => {
  const categories = [
    {
      id: 'sari',
      name: 'Sari',
      description: 'Silk, cotton, chiffon and designer saris',
      icon: '🥻'
    },
    {
      id: 'kurtha',
      name: 'Kurtha',
      description: 'Anarkali, straight-cut and palazzo kurtha sets',
      icon: '👘'
    },
    {
      id: 'sirak',
      name: 'Sirak',
      description: 'Traditional and printed cotton siraks',
      icon: '👗'
    },
    {
      id: 'dasana',
      name: 'Dasana',
      description: 'Embroidered and festive dasanas',
      icon: '✨'
    },
    {
      id: 'chakla',
      name: 'Chakla',
      description: 'Traditional chaklas for cultural occasions',
      icon: '🌸'
    }
  ];
  
  res.json(categories);
});

module.exports = router;
