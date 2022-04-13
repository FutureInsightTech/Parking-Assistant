//  ###############################################################################
//  #                                                                             #
//  #                      #### Mohammad Abdul Rafay   #####                      #
//  #                      #### 99marafay@gmail.com    #####                      #
//  #                      #### Github: rafay99-epic   #####                      #
//  #                      #### This is Page loader    #####                      #
//  #                      #### Router Folder          #####                      #
//  #                                                                             #
//  ###############################################################################

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

//this will render the add user page.
router.get("/add-user", (req, res) =>{
    res.render("add-user");
});

//this will render the service page
router.get("/service", (req, res) =>{
    res.render("service");
});

//thius will render the parking view page
router.get("/parking-map", (req, res) =>{
    res.render("parking-map");
})

//this will render the manager dashboard after login
router.get("/manager-dashboard", (req, res) =>{
    res.render("manager-dashboard");
})
//this is for the view parking 
router.get("/view-parking", (req, res) => {
  res.render("view-parking");
});
//this is for the render of the set parking rate by the admin side
router.get("/set-parking-rate", (req, res) => {
    res.render("set-parking-rate");
})
//THis will render the page called the view delete and update user profile from the databases
router.get("/view-update-delete-user-profile", (req, res) => {
    res.render("view-update-delete-user-profile");
})
//this will render the view suggestion page and the admin can see all of the data from the database.
router.get("/view-suggestions", (req, res) => {
    res.render("view-suggestions");    
})
//this will render that page that will dislayed the vreserved parking spot.
router.get("/view-user-reserved", (req, res)=> {
    res.render("view-user-reserved");    
})
// this will for logout and destory session for the admin 
router.get("/logout", (req, res) =>{
    req.session.destroy();
    res.redirect("/manager_login");
})


module.exports = router;
