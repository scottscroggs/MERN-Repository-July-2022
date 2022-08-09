const Product = require("../models/product.model.js")

module.exports.createProduct = (request, response) => {
    //Mongoose's "create" method is run using our model to add a new record.
    Product.create(request.body)
        .then(product => response.json(product))
        .catch(err => response.json(err));
}