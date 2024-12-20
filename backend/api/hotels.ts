import express from 'express';

const router = express.Router();

interface Hotel {
  id: number;
  name: string;
  price: number;
  location: string;
  star: number;
  tags: string[];
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: 'Hotel 1',
    price: 120,
    location: 'New York',
    star: 4,
    tags: ['#free-cancellation', '#breakfast-included'],
  },
  {
    id: 2,
    name: 'Hotel 2',
    price: 80,
    location: 'Los Angeles',
    star: 3,
    tags: ['#breakfast-included'],
  },
  // Add more hotels...
];

// Define routes
router.get('/api/hotels', (req, res) => {
  res.json(hotels);
});

export default router;
