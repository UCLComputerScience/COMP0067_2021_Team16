const connection = require("../config/connection.js");
let fs = require('fs');
const { BlobServiceClient } = require('@azure/storage-blob');
const AZURE_STORAGE_CONNECTION_STRING = "DefaultEndpointsProtocol=https;AccountName=babyobjectstorage;AccountKey=SCbseZIsOhjcb+pwnU+dB1lbsBTRtiY++lLC66Od/Oo75iLrn7Mj+xV3A7StyzOX6wizvTGpWK7l8psJDdMU0Q==;EndpointSuffix=core.windows.net";
const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
const containerName = "babyblob"
const containerClient = blobServiceClient.getContainerClient(containerName);

// Citation https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-nodejs

module.exports = function (app) {

  // Slideshows
  app.get("/slideshows/all", function (req, res) {
    let dbQuery = "SELECT sc.slideshow_name as slideshow_name, sc.slideshow_id as slideshow_id, i.image_name as image_name, i.image_file_name as image_file_name, i.image_url as image_url FROM baby.images i, baby.slideshow_category sc, baby.slideshows s WHERE s.slideshow_id = sc.slideshow_id AND s.image_id = i.image_id ORDER BY s.order";
    connection.query(dbQuery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  app.get("/slideshows/listings", function (req, res) {
    let dbQuery = "SELECT * FROM slideshow_category";
    connection.query(dbQuery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  app.get("/slideshows/:id", function (req, res) {
    console.log(req.params);
    let dbQuery = "SELECT cat.slideshow_name, i.image_name, i.image_url, i.image_audio_url FROM slideshow_category cat, images i WHERE i.image_id IN (SELECT image_id FROM slideshows WHERE slideshow_id = ?) AND cat.slideshow_id IN (SELECT slideshow_id FROM slideshows WHERE slideshow_id = ?)"
    connection.query(dbQuery, [req.params.id, req.params.id], function (err, result) {
      if (err) throw err;
      res.json(result);
      console.log("Slideshow selected!");
    });
  })

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
    const blobName = req.files[0].originalname;
    async function main() {
      console.log(blobName);
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);
      const data = req.files[0].path;
      console.log(data);
      const uploadBlobResponse = await blockBlobClient.uploadFile(req.files[0].path, { blobHTTPHeaders: { blobContentType: req.files[0].mimetype } });
    }
    main().then(() => waitForFinish()).catch((ex) => console.log(ex.message))
    console.log("Image Data:");
    console.log(req.body);
    let newImage = {
      image_name: req.body.name.trim().toUpperCase(),
      image_text: req.body.narration.trim().replace(/\.\s+([a-z])[^\.]|^(\s*[a-z])[^\.]/g, s => s.replace(/([a-z])/, s => s.toUpperCase())),
      image_file_name: blobName,
      image_url: "https://babyobjectstorage.blob.core.windows.net/babyblob/" + blobName.replace(" ", "%20"),
      image_audio_file_name: "",
      image_audio_url: ""
    };
    async function waitForFinish() {
      let dbQuery = "INSERT INTO images (image_name,image_text,image_file_name,image_url,image_audio_file_name,image_audio_url) VALUES (?,?,?,?,?,?)";
      connection.query(dbQuery, [newImage.image_name, newImage.image_text, newImage.image_file_name, newImage.image_url, newImage.image_audio_file_name, newImage.image_audio_url], function (err, result) {
        if (err) throw err;
      })
      let dbQuery2 = "SELECT MAX(image_id) as image_id FROM images";
      connection.query(dbQuery2, [newImage.image_url], function (err, result) {
        let chosen = result[0]["image_id"];
        let dbQuery3 = "INSERT INTO slideshows (slideshow_id, image_id) VALUES (1,?)";
        connection.query(dbQuery3, chosen, function (err, result) {
          console.log("Image successfully saved!");
          res.redirect('/views/addimage.html');
        })
      });
    }
  }
  );

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
    const blobName = req.files[0].originalname;
    async function main() {
      console.log(blobName);
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);
      const data = req.files[0].path;
      console.log(data);
      const uploadBlobResponse = await blockBlobClient.uploadFile(req.files[0].path, { blobHTTPHeaders: { blobContentType: req.files[0].mimetype } });
    }
    main().then(() => waitForFinish()).catch((ex) => console.log(ex.message))
    console.log("Audio Data:");
    console.log(req.body);
    async function waitForFinish() {
      let newAudio = "https://babyobjectstorage.blob.core.windows.net/babyblob/" + blobName.replace(" ", "%20");
      let dbQuery = "UPDATE images SET image_audio_file_name = ?, image_audio_url = ? WHERE image_id = ?;";
      connection.query(dbQuery, [req.files[0].originalname, newAudio, req.body.answer], function (err, result) {
        if (err) throw err;
        console.log("Audio successfully saved!");
        res.redirect('/views/addaudio.html');
      });
    }
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
    const blobName = req.files[0].originalname;
    async function main() {
      console.log(blobName);
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);
      const data = req.files[0].path;
      console.log(data);
      const uploadBlobResponse = await blockBlobClient.uploadFile(req.files[0].path, { blobHTTPHeaders: { blobContentType: req.files[0].mimetype } });
    }
    main().then(() => waitForFinish()).catch((ex) => console.log(ex.message))
    console.log("Music Data:");
    console.log(req.body);
    async function waitForFinish() {
      let newMusic = "https://babyobjectstorage.blob.core.windows.net/babyblob/" + blobName.replace(" ", "%20");
      let dbQuery = "INSERT INTO music (music_name,music_url) VALUES (?,?)";
      connection.query(dbQuery, [req.files[0].originalname, newMusic], function (err, result) {
        if (err) throw err;
        console.log("Music successfully saved!");
        res.redirect('/views/addmusic.html');
      });
    };
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
      let writeStream = fs.createWriteStream("./app/public/views/MailingList.xls");
      let header = "ID" + "\t" + "First Name" + "\t" + "Last Name" + "\t" + "Email Address" + "\t" + "Date Added" + "\t" + "Consent" + "\n";
      writeStream.write(header);
      for (let i = 0; i < result.length; i++) {
        let row = "";
        row += result[i]["email_id"] + "\t";
        row += result[i]["email_address"] + "\t";
        row += result[i]["email_first_name"] + "\t";
        row += result[i]["email_last_name"] + "\t";
        if (result[i]["email_date_registered"] != null) {
          row += result[i]["email_date_registered"] + "\t";
        } else {
          row += "NA \t";
        } if (result[i]["email_consent"] != null) {
          row += result[i]["email_consent"] + "\n";
        } else {
          row += "NA \t";
        }
        writeStream.write(row);
      }
      writeStream.close();
    });
  });

  app.post("/mailinglist/new", function (req, res) {
    let rightNow = new Date().toLocaleString();
    console.log(rightNow)
    console.log("Mailing List Data:");
    console.log(req.body);
    let dbQuery = "INSERT INTO emails (email_address,email_first_name,email_last_name,email_date_registered, email_consent) VALUES (?,?,?,?,?)";
    connection.query(dbQuery, [req.body.email_address, req.body.email_first_name, req.body.email_last_name, rightNow, "I consent to receiving updates about future products"], function (err, result) {
      if (err) throw err;
      console.log("Record successfully saved!");
      res.end();
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
