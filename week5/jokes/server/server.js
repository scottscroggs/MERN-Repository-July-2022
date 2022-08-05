//Setting up Express
const express = require("express");
const app = express();

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));

//Importing Joke Routes
const AllMyJokeRoutes = require("./routes/joke.routes");
AllMyJokeRoutes(app);

app.listen(8000, () => console.log("The server is running on port 8000"));