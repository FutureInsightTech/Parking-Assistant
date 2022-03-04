//  ###############################################################################
//  #                                                                             #
//  #                      #### Mohammad Abdul Rafay   #####                      #
//  #                      #### 99marafay@gmail.com    #####                      #
//  #                      #### Github: rafay99-epic   #####                      #
//  #                      #### The App.js File        #####                      #
//  #                                                                             #
//  ###############################################################################

//Express is used to start the node server
const express = require("express");
//mysql libiary
const mysql = require("mysql");
//This the env where the important passord and file will be kept
const dotenv = require("dotenv");

//Staring of the server
const app = express();
//Connection and the variables rquired for the connectin with the datbase.
//The connection is beeing trafered to the variable called db
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'parking_data'
});

//Check if the data base is connected or not if not then eror will be shod on the terminal
db.connect( (error) => {
    if(error){
        console.log(error);
    }
    else {
        console.log("My SQL Database is connected successfully...");
    }
});


//Default and refirect to the default home page
//It is the route
app.get("/", (req, res) => {
    res.send("<h1>Hi web server is running</h1>");
})
//The is port number from which the server will rn
app.listen(5000,() => {
    console.log("Node Server is running at port 5000");
});