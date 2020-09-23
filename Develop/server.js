const express = require("express");
const mongoose = require("mongoose");

const logger = require("morgan");

const app = express();

const PORT = 3000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//const databaseUrl = "workout";
//const collections = ["list"];


mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// define routes.
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});











  