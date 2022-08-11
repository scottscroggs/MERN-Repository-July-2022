const Product = require("../models/product.model.js")

module.exports.createProduct = (request, response) => {
    //Mongoose's "create" method is run using our model to add a new record.
    Product.create(request.body)
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

//Method to Find All of the object.
module.exports.findAllProducts = (request, response) => {
    Product.find({})
        .then(products => {
            console.log(products);
            response.json(products);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}

//Method to Find One of the object
module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

//Method to Update an object
module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}

//Module to Delete an object
module.exports.deleteProduct= (request, response) => {
    Product.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

