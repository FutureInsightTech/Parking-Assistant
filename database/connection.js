//  ###############################################################################
//  #                                                                             #
//  #                      #### Mohammad Abdul Rafay   #####                      #
//  #                      #### 99marafay@gmail.com    #####                      #
//  #                      #### Github: rafay99-epic   #####                      #
//  #                      #### The connection DB pg   #####                      #
//  #                                                                             #
//  ###############################################################################



//Express is used to start the node server
const express = require("express");
//mysql libiary
const mysql = require("mysql");
//This the env where the important passord and file will be kept
const dotenv = require("dotenv");

dotenv.config({path:  './.env'});

const db = mysql.createConnection({
    //All of the values are in the .env file where they will be saved
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT
});

//Check if the data base is connected or not if not then eror will be shod on the terminal
db.connect( (error, connection) => {
    if(error){
        console.log(error);
    }
    else {
        console.log("My SQL Database is connected successfully...");
    }
});

module.exports = db;
