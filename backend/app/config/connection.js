const mysql = require('mysql');

const connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "password",
    database: "baby"
});

connection.connect(function (err) {
    if (err) {
        console.error("There was an error connecting: " + err.stack);
        return;
    }
    console.log("Your are connected as ID: " + connection.threadId);
});

module.exports = connection;