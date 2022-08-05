//Importing Mongoose into the file.
const mongoose = require('mongoose');

//Creating the Schema for the Joke object
const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String,
    },
    {timestamps: true}
);

//Mongoose.Model() takes the blueprint object, and creates the database collection from the model.
const Joke = mongoose.model('Joke', JokeSchema);

//Exporting the Joke variable
module.exports = Joke;