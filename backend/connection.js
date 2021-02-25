let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "baby"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as ID " + connection.threadId);
    afterConnection();
});