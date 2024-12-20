"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const tags = [
    {
        id: '#free-cancellation',
        label: 'Free Cancellation',
    },
    {
        id: '#breakfast-included',
        label: 'Breakfast Included',
    },
    {
        id: '#pool',
        label: 'Pool',
    },
    {
        id: '#gym',
        label: 'Gym',
    },
    {
        id: '#spa',
        label: 'Spa',
    },
    {
        id: '#pet-friendly',
        label: 'Pet Friendly',
    },
    {
        id: '#airport-shuttle',
        label: 'Airport Shuttle',
    },
    {
        id: '#free-parking',
        label: 'Free Parking',
    },
    {
        id: '#romantic',
        label: 'Romantic',
    },
    {
        id: '#business-friendly',
        label: 'Business Friendly',
    },
];

// Define routes
router.get('/api/tags', (req, res) => {
    res.json(tags);
});
module.exports = router;
