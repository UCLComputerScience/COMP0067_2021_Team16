const connection = require("../config/connection.js");

module.exports = function(app) {
  app.get("/api/all", function(req, res) {
    let dbQuery = "SELECT * FROM images ORDER BY id DESC";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  app.post("/api/new", function(req, res) {
    console.log("Image Data:");
    console.log(req.body);
    
    let dbQuery = "INSERT INTO images (type, name, png) VALUES (?,?,?)";

    connection.query(dbQuery, [req.body.type, req.body.name, req.body.png], function(err, result) {
      if (err) throw err;
      console.log("Image successfully saved!");
      res.end();
    });
  });
};
