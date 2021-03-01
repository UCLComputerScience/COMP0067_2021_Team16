const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(require('cors')())

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});
