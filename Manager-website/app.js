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
// Default come with node js no need to install path.
const path = require("path");
//connection with database and fetching the connection file
const con = require("./database/connection");

const session = require("./session/session");
//adding the express session to the application.js session
// const session = require("express-session");


//Staring of the server
const app = express();


app.use(express.static("image"));
  
// Route to display static src images
app.get("/static", (req, res) => {
    res.render("static");
});

 app.use(session({
     secret: "ABCDefg",
     resave: false,
     saveUninitialized: true,
 }));

//this take two parameters __dirname is  a node js variable.
//THis will provide a path to current directory.
const publicDirectory = path.join(__dirname, './public');

//To use all the public iibiaries we need to tell the server to use the files.
app.use(express.static(publicDirectory));

//passing the url from the website of any data type.
app.use(express.urlencoded({extend: false}));
//this line of code will make sure that the data is comming in the form of json.
app.use(express.json());

//setting the template for the website using handle bars
app.set("view engine", 'hbs');

//define route for the webpage
//All of the webpages will be called from the roter folder and the pages.js fill will run to call the pages.
app.use("/" ,require('./routes/pages'));

//fetching the aurth file
app.use("/auth", require('./routes/auth'));

//The is port number from which the server will rn
app.listen(5000,() => {
    console.log("Node Server is running at port 5000");
});
