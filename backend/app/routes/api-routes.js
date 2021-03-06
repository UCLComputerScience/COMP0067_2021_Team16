const fs = require('fs');
const connection = require("../config/connection.js");

module.exports = function (app) {
  app.get("/images/all", function (req, res) {
    let dbQuery = "SELECT * FROM images ORDER BY id ASC";

    connection.query(dbQuery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  app.post("/images/new", function (req, res) {
    console.log("Image Data:");
    console.log(req.body);
    let newImage = {
          type: "default",
          name: req.body.name.trim().toUpperCase(),
          text: req.body.narration.trim().replace(/\.\s+([a-z])[^\.]|^(\s*[a-z])[^\.]/g, s => s.replace(/([a-z])/,s => s.toUpperCase())),
          png: req.body.name.trim().replace(/[^A-Z\d\s]/gi, '').replace(/\s/g, '').toLowerCase() + ".png"
        };

    let dbQuery = "INSERT INTO images (type, name, text, png) VALUES (?,?,?,?)";

    connection.query(dbQuery, [newImage.type, newImage.name, newImage.text, newImage.png], function (err, result) {
      if (err) throw err;
      console.log("Image successfully saved!");
      res.redirect('/views/addimage.html'); 
    });
  });

  // app.post('/images/upload', function (req, res) {
  //   fs.readFile(req.files.image.path, function (err, data) {
  //     if (err) throw err;
  //     let imageName = req.files.image.name
  //     let newPath = __dirname + "/images/" + imageName;
  //     fs.writeFile(newPath, data, function (err) {
  //       if (err) throw err;
  //       res.redirect("/images/" + imageName);
  //     })
  //   })
  // })

  app.delete("/images/delete/:id", function (req, res) {
    console.log(req.params);

    let dbQuery = "DELETE FROM images WHERE id = ?";
    connection.query(dbQuery, [req.params.id], function (err, result) {
      if (err) throw err;
      console.log("Image deleted from images!");
      res.end();
    });

    let dbQuery2 = "DELETE FROM slideshows WHERE images_id = ?";
    connection.query(dbQuery2, [req.params.id], function (err, result) {
      if (err) throw err;
      console.log("Image deleted from slideshows!");
      res.end();
    });

  })
};
