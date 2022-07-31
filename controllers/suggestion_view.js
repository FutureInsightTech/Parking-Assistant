//  ###############################################################################
//  #                                                                             #
//  #                      #### Mohammad Abdul Rafay   #####                      #
//  #                      #### 99marafay@gmail.com    #####                      #
//  #                      #### Github: rafay99-epic   #####                      #
//  #                      #### The Aruth File in the  #####                      #
//  #                      #### View Suggestions       #####                      #
//  #                                                                             #
//  ###############################################################################

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
  port: process.env.DATABASE_PORT,
});


//this will render data for the suggestion pages
exports.view = (req, res) => {
  connection.query("SELECT * FROM contact_page", (err, rows) => {
    if(!err) 
    {
      res.render("view-suggestions", { rows });
    }
    else {
      console.log(err);
    }
  });
};