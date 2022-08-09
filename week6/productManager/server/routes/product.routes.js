//Importing our code from the Controller file.
const ProductController = require('../controllers/product.controller');


//GET request to the "/api" route, will look to PersonController, and find the value assoc. w/Index key, and execute.
module.exports = (app) => {
    // app.get('/', ProductController.index);
    app.post('/api/product', ProductController.createProduct);
}