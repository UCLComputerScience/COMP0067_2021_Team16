let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "baby"
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);
    afterConnection();
});