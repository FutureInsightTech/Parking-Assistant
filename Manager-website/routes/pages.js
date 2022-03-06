//Express is used to start the node server
const express = require("express");

//getting the router for the webpages.
const router = express.Router();


//KEY Points
// The Default Directory for handle Bars is the View Directory
// The Pages will be created in the view Folder
// The images can not be loaded directly becuase by default everything is priviate.
//  In order to to add images or static files in the website you need to create a public folder.


//Default and refirect to the default home page
//It is the route for the main run file which is the index.hbs
router.get("/", (req, res) => {
    //res.send("<h1>Hi web server is running</h1>");
    res.render("index");
});

//this will load dashboard when dashboard is called from the website using node js
router.get("/dashboard", (req, res) => {
    //res.send("<h1>Hi web server is running</h1>");
    res.render("dashboard");

});

//this will load the manager login page
router.get("/manager_login", (req, res) => {
    res.render("manager_login")
});

//this will load the contact page when /contact will be rendered
router.get("/contact", (req, res) =>{
    res.render("contact");
});

//this page will render about page when /about wwill be called
router.get("/about", (req, res) =>{
    res.render("about")
});

app.get("/add-user", (req, res) =>{
    res.render("add-user");
});

module.exports = router;
