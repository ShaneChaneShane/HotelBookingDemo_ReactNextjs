"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const hotels = [
    {
        id: 1,
        name: 'Bay Area Lodge',
        price: 600,
        location: 'Seattle, WA',
        star: 5,
        tags: ['#romantic', '#spa', '#gym', '#free-parking'],
    },
    {
        id: 2,
        name: 'Seaside Escape',
        price: 180,
        location: 'Miami, FL',
        star: 4,
        tags: ['#pool', '#pet-friendly', '#free-parking'],
    },
    {
        id: 3,
        name: 'Mountain View Resort',
        price: 250,
        location: 'Aspen, CO',
        star: 4,
        tags: ['#spa', '#gym', '#romantic'],
    },
    {
        id: 4,
        name: 'City Center Inn',
        price: 95,
        location: 'Chicago, IL',
        star: 3,
        tags: ['#breakfast-included', '#free-parking'],
    },
    {
        id: 5,
        name: 'Lakefront Luxury',
        price: 550,
        location: 'Lake Tahoe, CA',
        star: 5,
        tags: ['#pool', '#spa', '#free-cancellation'],
    },
    {
        id: 6,
        name: 'The Desert Oasis',
        price: 450,
        location: 'Phoenix, AZ',
        star: 5,
        tags: ['#business-friendly', '#gym', '#free-parking'],
    },
    {
        id: 7,
        name: 'Sunset Beach Hotel',
        price: 220,
        location: 'San Diego, CA',
        star: 4,
        tags: ['#pool', '#breakfast-included', '#pet-friendly'],
    },
    {
        id: 8,
        name: 'The Oakwood Suites',
        price: 350,
        location: 'Dallas, TX',
        star: 4,
        tags: ['#free-cancellation', '#business-friendly', '#airport-shuttle'],
    },
    {
        id: 9,
        name: 'The Grand Plaza',
        price: 320,
        location: 'New York, NY',
        star: 5,
        tags: ['#free-cancellation', '#breakfast-included', '#spa', '#gym'],
    },
    {
        id: 10,
        name: 'Coastal Breeze Inn',
        price: 200,
        location: 'Charleston, SC',
        star: 4,
        tags: ['#free-cancellation', '#pool', '#pet-friendly'],
    },
    {
        id: 11,
        name: 'Luxury Lakeside Hotel',
        price: 800,
        location: 'Chicago, IL',
        star: 5,
        tags: ['#spa', '#gym', '#romantic'],
    },
    {
        id: 12,
        name: 'Maple Grove Resort',
        price: 170,
        location: 'Portland, OR',
        star: 3,
        tags: ['#breakfast-included', '#pool'],
    },
];

// Define routes
router.get('/api/hotels', (req, res) => {
    res.json(hotels);
});
module.exports = router;
