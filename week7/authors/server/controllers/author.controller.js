const Author = require("../models/author.model.js")

module.exports.createAuthor = (request, response) => {
    //Mongoose's "create" method is run using our model to add a new record.
    Author.create(request.body)
        .then(Author => response.json(author))
        .catch(err => response.json(err));
}

//Method to Find All of the object.
module.exports.findAllAuthors = (request, response) => {
    Author.find({})
        .then(authors => {
            console.log(authors);
            response.json(authors);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}

//Method to Find One of the object
module.exports.getAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}

//Method to Update an object
module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.json(err))
}

//Module to Delete an object
module.exports.deleteAuthor= (request, response) => {
    Author.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

