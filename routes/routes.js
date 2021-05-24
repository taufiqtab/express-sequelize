const express = require('express');

const app = require('../controllers/product.js');

const router = express.Router();

router.get('/products', app.getProducts);
router.get('/products/:id', app.getProductById);
router.post('/products', app.createProduct);
router.put('/products/:id', app.updateProduct);
router.delete('/products/:id', app.deleteProduct);

module.exports = router;