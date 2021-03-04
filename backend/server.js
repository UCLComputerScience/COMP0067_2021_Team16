const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 8080;

let Slideshows = require("./models/slideshows.js");
let Users = require("./models/users.js");

app.use(require('cors')())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

mongoose.connect("mongodb://localhost/baby", { useNewUrlParser: true });


app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});


// webserver 

// way to accept incoming rest calls (library, or component -> translates from raw data)