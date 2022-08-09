//Importing our code from the Controller file.
const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/api/product', ProductController.createProduct); //POST request to create a new record
    app.get('/api/product', ProductController.findAllProducts); //GET request to retrieve all records
    app.get('/api/product/:id', ProductController.getProduct); //GET request to retrieve a single record
}

