//Importing our code from the Controller file.
const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/api/product', ProductController.createProduct); //POST request to create a new record
    app.get('/api/product', ProductController.findAllProducts); //GET request to retrieve all records
    app.get('/api/product/:id', ProductController.getProduct); //GET request to retrieve a single record
    app.put('/api/product/:id', ProductController.updateProduct); //PUT request to update a single record
    app.delete('/api/product/:id', ProductController.deleteProduct); //DELETE request to delete a single record



}

