import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import hotelsRouter from './api/hotels.js'; // Note: Use `.js` because compiled TypeScript becomes `.js`
import tagsRouter from './api/tags.js';
import path from 'node:path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mount the hotels routes
app.use(hotelsRouter,tagsRouter);
// Serve static files from the images directory
app.use('/images/hotels', express.static(path.join(__dirname, './api/public/images')));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
