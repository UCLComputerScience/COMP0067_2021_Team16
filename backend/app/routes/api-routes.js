const connection = require("../config/connection.js");
const excel = require('exceljs');

module.exports = function (app) {

  // Slideshows
  app.get("/slideshows/all", function (req, res) {
    let dbQuery = "SELECT sc.slideshow_name as slideshow_name, sc.slideshow_id as slideshow_id, i.image_name as image_name, i.image_file_name as image_file_name, i.image_url as image_url FROM baby.images i, baby.slideshow_category sc, baby.slideshows s WHERE s.slideshow_id = sc.slideshow_id AND s.image_id = i.image_id ORDER BY s.order";
    connection.query(dbQuery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  app.post("/slideshows/new", function (req, res) {
    console.log("Slideshow Data:");
    console.log(req.body);
    let dbQuery = "INSERT INTO slideshow_category (slideshow_type, slideshow_name) VALUES (?,?)";
    connection.query(dbQuery, ["default", req.body.name], function (err, result) {
      if (err) throw err;
      console.log("Slideshow successfully saved in slideshow_category!");
    })
    let dbQuery2 = "SELECT slideshow_id FROM slideshow_category WHERE slideshow_name = ?";
    connection.query(dbQuery2, [req.body.name], function (err, result) {
      if (err) throw err;
      for (let i = 1; i < Object.keys(req.body).length; i++) {
        let dbQuery3 = "INSERT INTO slideshows (slideshow_id, image_id) VALUES (?,?)";
        connection.query(dbQuery3, [result[0]["slideshow_id"], parseInt(req.body[Object.keys(req.body)[i]])], function (err, result) {
          if (err) throw err;
        })
      }
      console.log("Slideshow successfully saved in slideshows!");
      res.redirect('/views/addslideshow.html');
    })
  });

  app.delete("/slideshows/delete/:id", function (req, res) {
    console.log(req.params);
    let dbQuery = "DELETE FROM slideshow_category WHERE slideshow_id = ?";
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
    let dbQuery = "SELECT * FROM images ORDER BY image_id ASC";
    connection.query(dbQuery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  app.post("/images/new", function (req, res) {
    console.log("Image Data:");
    console.log(req.body);
    let newImage = {
      image_name: req.body.name.trim().toUpperCase(),
      image_text: req.body.narration.trim().replace(/\.\s+([a-z])[^\.]|^(\s*[a-z])[^\.]/g, s => s.replace(/([a-z])/, s => s.toUpperCase())),
      image_file_name: req.body.image,
      image_url: "Local Storage",
      image_audio_file_name: "",
      image_audio_url: ""
    };
    let dbQuery = "INSERT INTO images (image_name,image_text,image_file_name,image_url,image_audio_file_name,image_audio_url) VALUES (?,?,?,?,?,?)";
    connection.query(dbQuery, [newImage.image_name, newImage.image_text, newImage.image_file_name, newImage.image_url, newImage.image_audio_file_name, newImage.image_audio_url], function (err, result) {
      if (err) throw err;
      console.log("Image successfully saved!");
      res.redirect('/views/addimage.html');
    });
  });

  app.delete("/images/delete/:id", function (req, res) {
    console.log(req.params);
    let dbQuery = "DELETE FROM images WHERE image_id = ?";
    connection.query(dbQuery, [req.params.id], function (err, result) {
      if (err) throw err;
      console.log("Image deleted from images!");
      res.end();
    });
    let dbQuery2 = "DELETE FROM slideshows WHERE image_id = ?";
    connection.query(dbQuery2, [req.params.id], function (err, result) {
      if (err) throw err;
      console.log("Image deleted from slideshows!");
      res.end();
    });
  })

  // Audios
  app.get("/audios/all", function (req, res) {
    let dbQuery = "SELECT * FROM images ORDER BY image_id ASC";
    connection.query(dbQuery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  app.post("/audios/new", function (req, res) {
    console.log("Audio Data:");
    console.log(req.body);
    let dbQuery = "UPDATE images SET image_audio_file_name = ?, image_audio_url = 'Local Storage' WHERE image_id = ?;";
    connection.query(dbQuery, [req.body.audio, req.body.answer], function (err, result) {
      if (err) throw err;
      console.log("Audio successfully saved!");
      res.redirect('/views/addaudio.html');
    });
  });

  app.put("/audios/delete/:id", function (req, res) {
    console.log(req.params);
    let dbQuery = "UPDATE images SET image_audio_file_name = '', image_audio_url= '' WHERE image_id = ?";
    connection.query(dbQuery, [req.params.id], function (err, result) {
      if (err) throw err;
      console.log("Audio deleted from images!");
      res.end();
    });
  });

   // Music
   app.get("/music/all", function (req, res) {
    let dbQuery = "SELECT * FROM music ORDER BY music_id ASC";
    connection.query(dbQuery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

   app.post("/music/new", function (req, res) {
    console.log("Music Data:");
    console.log(req.body);
    let dbQuery = "INSERT INTO music (music_name,music_url) VALUES (?,?)";
    connection.query(dbQuery, [req.body.audio, "Local Storage"], function (err, result) {
      if (err) throw err;
      console.log("Music successfully saved!");
      res.redirect('/views/addmusic.html');
    });
  });

  app.delete("/music/delete/:id", function (req, res) {
    console.log(req.params);
    let dbQuery = "DELETE FROM music WHERE music_id = ?";
    connection.query(dbQuery, [req.params.id], function (err, result) {
      if (err) throw err;
      console.log("Music deleted!");
      res.end();
    });
  });

  // Mailing List
  app.get("/mailinglist/all", function (req, res) {
    let dbQuery = "SELECT * FROM emails ORDER BY email_id ASC";
    connection.query(dbQuery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  app.get("/mailinglist/excel", function (req, res) {
    let dbQuery = "SELECT * FROM emails ORDER BY email_id ASC";
    connection.query(dbQuery, function (err, result) {
      if (err) throw err;
      const jsonEmails = JSON.parse(JSON.stringify(result))
      let workbook = new excel.Workbook();
      let worksheet = workbook.addWorksheet('Mailing List');
      worksheet.columns = [
        { header: 'ID', key: 'email_id', width: 10 },
        { header: 'Email Address', key: 'email_address', width: 100 },
        { header: 'Date Added', key: 'date_registered', width: 50 }
      ]
      worksheet.addRows(jsonEmails)
      workbook.xlsx.writeBuffer("./app/public/views/MailingList.xlsx")
        .then(function () {
          console.log("File saved!");
          res.send("File saved!")
        })
    });
  });

  app.delete("/mailinglist/delete/:id", function (req, res) {
    console.log(req.params);
    let dbQuery = "DELETE FROM emails WHERE email_id = ?";
    connection.query(dbQuery, [req.params.id], function (err, result) {
      if (err) throw err;
      console.log("Email deleted from mailing list!");
      res.end();
    });
  })
};
