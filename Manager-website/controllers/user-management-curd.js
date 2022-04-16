//  ###############################################################################
//  #                                                                             #
//  #                      #### Mohammad Abdul Rafay   #####                      #
//  #                      #### 99marafay@gmail.com    #####                      #
//  #                      #### Github: rafay99-epic   #####                      #
//  #                      #### The Aruth File in the  #####                      #
//  #                      #### user-managerment       #####                      #
//  #                                                                             #
//  ###############################################################################

const mysql = require("mysql");
//This the env where the important passord and file will be kept
const dotenv = require("dotenv");

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

// View Users
exports.view = (req, res) => {
  // User the connection
  connection.query("SELECT * FROM user", (err, rows) => {
    if (!err) {
      res.render("view-update-delete-user-profile", { rows });
    } else {
      console.log(err);
    }
  });
};

// //Expess Libiary for server run
// const express = require("express");

// //mysql libiary
// const mysql = require("mysql");

// const pool= mysql.createPool({
//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE
// })

// //View User Data
// exports.view = (req, res) => {
//     pool.getConnection((err, connection) => {
//         if(err) throw err;
//         console.log('Connection ID:', connection.threadId);
//         //User the connection
//         connection.query("SELECT * FROM `user`", (err, rows) => {
//             connection.release();

//             if(!err){
//                 res.render('view-update-delete-user-profile', { rows });
//             }
//             else{
//                 console.log(err)
//             }
//             console.log("Hellow World");
//             console.log('The data is from user table is: \n'+ rows);
//         })
//     })
// }
//To view the user profile from the database
// exports.view =(req, res) =>{

//         connection.query("SELECT * FROM `user`", (err,rows) =>{

//when done the connection will be releases
//             connection.release();
//             if(!err){
//                 res.render("view-update-delete-user-profile", { rows });
//             }
//             else{
//                 console.log(err + "There is a problem");
//             }

//             console.log("The data from user table: \n "+rows);

//         })

//     });

// }
