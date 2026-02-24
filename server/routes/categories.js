const express = require('express');
const router = express.Router();

// Get all categories
router.get('/', (req, res) => {
  const categories = [
    {
      id: 'lighting',
      name: 'Lighting',
      description: 'LED bulbs, tube lights, panel lights and more',
      icon: '💡'
    },
    {
      id: 'fans',
      name: 'Fans',
      description: 'Ceiling fans, table fans, exhaust fans',
      icon: '🌀'
    },
    {
      id: 'switches',
      name: 'Switches & Sockets',
      description: 'Modular switches, MCBs, sockets',
      icon: '🔌'
    },
    {
      id: 'wires-cables',
      name: 'Wires & Cables',
      description: 'Electrical wires, extension cords',
      icon: '🔗'
    }
  ];
  
  res.json(categories);
});

module.exports = router;
