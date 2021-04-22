const mysql = require('mysql');

const connection = mysql.createConnection({
    port: 3306,
    host: "0067team16app.mysql.database.azure.com",
    user: "app_admin@0067team16app",
    password: "Newborn1!2",
    database: "baby"
});

connection.connect(function (err) {
    if (err) {
        console.error("There was an error connecting: " + err.stack);
        return;
    }
    console.log("You are connected as ID: " + connection.threadId);
});

module.exports = connection;