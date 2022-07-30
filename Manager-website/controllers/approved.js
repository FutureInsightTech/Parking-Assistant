
const mysql = require("mysql");
//This the env where the important passord and file will be kept
const dotenv = require("dotenv");
const router = require("../routes/pages");

//Getting the .ev file
dotenv.config({ path: "../.env" });

// Connection Pool
let connection = mysql.createConnection({
  connectionLimit: 10000,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

exports.view = (req, res) => {
  // User the connection
  connection.query("SELECT * FROM reserved_parking", (err, rows) => {
    if (!err) {
      res.render("view-user-reserved", { rows });
    } else {
      console.log(err);
    }
  });
};
