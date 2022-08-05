const JokeController = require('../controllers/joke.controller');

//Reminder - order of the routes matter! Put static routes before ones with variables
module.exports = app => {
    app.get('/api/jokes', JokeController.getAllJokes);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.get('/api/jokes/:_id', JokeController.findOneSingleJoke);
    app.put('/api/jokes/:_id', JokeController.updateExistingJoke);
    app.delete('/api/jokes/:_id', JokeController.deleteExistingJoke);
}