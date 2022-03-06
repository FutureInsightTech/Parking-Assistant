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
// Default come with node js no need to install path.
const path = require("path");

dotenv.config({path:  './.env'});
//Staring of the server
const app = express();
//Connection and the variables rquired for the connectin with the datbase.
//The connection is beeing trafered to the variable called db
const db = mysql.createConnection({
    //All of the values are in the .env file where they will be saved
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});


app.use(express.static("image"));
  
// Route to display static src images
app.get("/static", (req, res) => {
    res.render("static");
});

//this take two parameters __dirname is  a node js variable.
//THis will provide a path to current directory.
const publicDirectory = path.join(__dirname, './public');

//To use all the public iibiaries we need to tell the server to use the files.
app.use(express.static(publicDirectory));

//setting the template for the website using handle bars
app.set("view engine", 'hbs');

//Check if the data base is connected or not if not then eror will be shod on the terminal
db.connect( (error) => {
    if(error){
        console.log(error);
    }
    else {
        console.log("My SQL Database is connected successfully...");
    }
});

//define route for the webpage
//All of the webpages will be called from the roter folder and the pages.js fill will run to call the pages.
app.use("/" ,require('./routes/pages'));


//The is port number from which the server will rn
app.listen(5000,() => {
    console.log("Node Server is running at port 5000");
});