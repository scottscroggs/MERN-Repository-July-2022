const Joke = require('../models/joke.model');

//Function to get all Jokes from the database
module.exports.getAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({allJokes})
        })
        .catch((err) => console.log(err)
        );
}

//Function to get a single Joke from the database by ID
module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({_id: req.params._id})
        .then(oneSingleJoke => {
            res.json({joke: oneSingleJoke})
        })
        .catch((err) => console.log(err)
        );
    }

//Function to create a new Joke
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => {
            res.json({joke: newlyCreatedJoke})
        })
        .catch((err) => console.log(err)
        );
}

//Function to update an existing Joke
module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id: req.params._id},
        req.body,
        {new:true, runValidators: true}
    )
        .then(updatedJoke => {
            res.json({updatedJoke})
        })
        .catch((err) => console.log(err)
        );
}

//Function to delete an existing Joke
module.exports.deleteExistingJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
        .then(result => {
            res.json({result: result})
        })
        .catch((err) => console.log(err)
        );
};
