const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Enable CORS to allow requests from different origins
app.use(cors());

/**
 * Route to get all products.
 * @route GET /produtos
 * @returns {Object[]} 200 - A list of products
 * @returns {Error} 500 - Error reading products
 */
app.get('/produtos', (req, res) => {
  fs.readFile('products.json', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading products' });
    }
    res.json(JSON.parse(data));
  });
});

/**
 * Route to get favorite products based on provided IDs.
 * @route GET /favoritos
 * @param {string} ids.query - Comma-separated IDs of favorite products
 * @returns {Object[]} 200 - A list of favorite products
 * @returns {Error} 500 - Error reading products
 */
app.get('/favoritos', (req, res) => {
  fs.readFile('products.json', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading product' });
    }

    const products = JSON.parse(data);
    const favoriteIds = req.query.ids ? req.query.ids.split(',') : [];

    const favoriteProducts = products.filter(product =>
      favoriteIds.includes(String(product.id))
    );

    res.json(favoriteProducts);
  });
});

/**
 * Route to get a simplified list of products.
 * @route GET /lista-produtos
 * @returns {Object[]} 200 - A simplified list of products with id, name, price, and highlighted
 * @returns {Error} 500 - Error reading products
 */
app.get('/lista-produtos', (req, res) => {
  fs.readFile('products.json', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading product' });
    }
    const products = JSON.parse(data).map(product => {
      const { id, name, price, highlighted } = product;
      return { id, name, price, highlighted };
    });
    res.json(products);
  });
});

// Start the server on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
