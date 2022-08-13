//Importing our code from the Controller file.
const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.post('/api/author', AuthorController.createAuthor); //POST request to create a new record
    app.get('/api/author', AuthorController.findAllAuthors); //GET request to retrieve all records
    app.get('/api/author/:id', AuthorController.getAuthor); //GET request to retrieve a single record
    app.put('/api/author/:id', AuthorController.updateAuthor); //PUT request to update a single record
    app.delete('/api/author/:id', AuthorController.deleteAuthor); //DELETE request to delete a single record

}
