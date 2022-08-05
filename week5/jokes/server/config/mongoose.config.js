//Importing Mongoose into the file.
const mongoose = require('mongoose');

//Connecting to the MongoDB, database name after localhost/
mongoose.connect('mongodb://localhost/jokes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database', err));