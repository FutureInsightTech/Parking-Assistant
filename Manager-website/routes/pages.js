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
var con = require("../database/connection");

//getting the router for the webpages.
const router = express.Router();
const UserDataViewController = require("../controllers/user-management-curd");

// Routes
router.get("/view-update-delete-user-profile", UserDataViewController.view);
//Record Deleted
router.get("/view-update-delete-user-profile/delete/:id", function (req, res) {
  var id = req.params.id;
  var sql = `DELETE FROM user WHERE id=${id}`;

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("record deleted!");
    res.redirect("/view-update-delete-user-profile");
  });
});

const approved = require("../controllers/approved");
// Routes
router.get("/view-user-reserved", approved.view);
//Record Deleted
router.get("/view-user-reserved/delete/:Id", function (req, res) {
  var id = req.params.Id;
  var sql = `DELETE FROM reserved_parking WHERE id=${id}`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("record deleted!");
    res.redirect("/view-user-reserved");
  });
});


// router.get("/edit-user", UserDataViewController.view);
// router.get('/view-update-delete-user-profile/edit-user/:id', function (req, res) {
//   var id= req.params.id;
//   res.render("update_profile")
//   con.query("UPDATE user SET ?",function (err,data) {
//       //if(error) throw err;
//       //console.log(data);
//       //console.log("Data is Updated");
//       res.redirect("/view-update-delete-user-profile");
//   }); 
// });


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
  res.render("manager_login");
});

//this will load the contact page when /contact will be rendered
router.get("/contact", (req, res) => {
  res.render("contact");
});

//this page will render about page when /about wwill be called
router.get("/about", (req, res) => {
  res.render("about");
});

//this will render the add user page.
router.get("/add-user", (req, res) => {
  res.render("add-user");
});

//this will render the service page
router.get("/service", (req, res) => {
  res.render("service");
});

//thius will render the parking view page
router.get("/parking-map", (req, res) => {
  res.render("parking-map");
});

//this will render the manager dashboard after login
router.get("/manager-dashboard", (req, res) => {
  res.render("manager-dashboard");
});
//this is for the view parking
router.get("/view-parking", (req, res) => {
  res.render("view-parking");
});
//this is for the render of the set parking rate by the admin side
router.get("/set-parking-rate", (req, res) => {
  res.render("set-parking-rate");
});
//THis will render the page called the view delete and update user profile from the databases
router.get("/view-update-delete-user-profile", (req, res) => {
  res.render("view-update-delete-user-profile");
});
//this will render the view suggestion page and the admin can see all of the data from the database.
router.get("/view-suggestions", (req, res) => {
  res.render("view-suggestions");
});
//this will render that page that will dislayed the vreserved parking spot.
router.get("/view-user-reserved", (req, res) => {
  res.render("view-user-reserved");
});
//this will render the update-rate-parking_rate
router.get("/update-rate", (req, res) => {
  res.render("update-rate");
});
// this will for logout and destory session for the admin
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/manager_login");
});


//User Side Pages render

//this will renger the user login Pages
router.get("/user-login",(req, res) => {
  res.render("user-login");
});
//This will render the user dashboard
router.get("/user_dashboard",(req, res) => {
  res.render("user_dashboard");
});
//this will logout the user account.
router.get("/userlogout",(req, res) => {
  req.session.destroy();
  res.redirect("/user-login");
});
//This wll router the  to the revere parking space
router.get("/reverseParking",(req, res) => {
  res.render("reverseParking");
});
//this will display userp parking map locationButton
router.get("/UserParkingMap",(req, res) => {
  res.render("UserParkingMap");
});
//this will render the view Profile:
router.get("/ViewProfile",(req, res) => {
  res.render("ViewProfile");
})
//this will render the User Input Parking Display map:
router.get("/DisplayUserParkingMap", (req, res) => {
  res.render("UserInputParkingMap");
});
//this will render the update Profile page
router.get("/update_profile", (req, res) => {
  res.render("update_profile");  
})
module.exports = router;
