const express = require("express");
const app = express();
const multer = require('multer');

const PORT = process.env.PORT || 8080;

app.use(require('cors')())
app.use(express.urlencoded({ extended: true }));
app.use(multer({dest:'./tmp'}).any());
app.use(express.json());

app.use(express.static("app/public"));
require("./app/routes/api-routes.js")(app);

app.listen(PORT, () => {
  console.log("App listening on PORT: http://localhost:" + PORT);
});
