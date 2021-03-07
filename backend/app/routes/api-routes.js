const connection = require("../config/connection.js");

module.exports = function (app) {

  // Slideshows
  app.get("/slideshows/all", function (req, res) {
    let dbQuery = "SELECT sc.name as slideshow_name, sc.id as slideshow_id, i.name as image, i.png as png FROM baby.images i, baby.slideshow_category sc, baby.slideshows s WHERE s.slideshow_id = sc.id AND s.images_id = i.id ORDER BY s.order";
    connection.query(dbQuery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  app.post("/slideshows/new", function (req, res) {
    console.log("Slideshow Data:");
    console.log(req.body);
    let dbQuery = "INSERT INTO slideshow_category (type, name) VALUES (?,?)";
    connection.query(dbQuery, ["default", req.body.name], function (err, result) {
      if (err) throw err;
      console.log("Slideshow successfully saved in slideshow_category!");
    })
    let dbQuery2 = "SELECT id FROM slideshow_category WHERE name = ?";
    connection.query(dbQuery2, [req.body.name], function (err, result) {
      if (err) throw err;
      for (let i = 1; i < Object.keys(req.body).length; i++) {
        let dbQuery3 = "INSERT INTO slideshows (slideshow_id, images_id) VALUES (?,?)";
        connection.query(dbQuery3, [result[0]["id"], parseInt(req.body[Object.keys(req.body)[i]])], function (err, result) {
          if (err) throw err;
        })
      }
      console.log("Slideshow successfully saved in slideshows!");
      res.redirect('/views/addslideshow.html');
    })
  });

  app.delete("/slideshows/delete/:id", function (req, res) {
    console.log(req.params);
    let dbQuery = "DELETE FROM slideshow_category WHERE id = ?";
    connection.query(dbQuery, [req.params.id], function (err, result) {
      if (err) throw err;
      console.log("Slideshow deleted from slideshow_category!");
      res.end();
    });
    let dbQuery2 = "DELETE FROM slideshows WHERE slideshow_id = ?";
    connection.query(dbQuery2, [req.params.id], function (err, result) {
      if (err) throw err;
      console.log("Slideshow deleted from slideshows!");
      res.end();
    });
  })

  // Images
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
      text: req.body.narration.trim().replace(/\.\s+([a-z])[^\.]|^(\s*[a-z])[^\.]/g, s => s.replace(/([a-z])/, s => s.toUpperCase())),
      png: req.body.image,
      default_mp3: ""
    };
    let dbQuery = "INSERT INTO images (type, name, text, png, default_mp3) VALUES (?,?,?,?,?)";
    connection.query(dbQuery, [newImage.type, newImage.name, newImage.text, newImage.png, newImage.default_mp3], function (err, result) {
      if (err) throw err;
      console.log("Image successfully saved!");
      res.redirect('/views/addimage.html');
    });
  });

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
