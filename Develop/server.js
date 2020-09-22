const express = require("express");
const mongoose = require("mongoose");

const logger = require("morgan");

const app = express();

const PORT = 8080;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workout";
const collections = ["list"];


mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});


const db = mongojs(databaseUrl, collections);
db.on("error", error => {
  console.log("Database Error:", error);
});











// Listen on port 3000
app.listen(3000, () => {
    console.log("App running on port 3000!");
  });
  
  