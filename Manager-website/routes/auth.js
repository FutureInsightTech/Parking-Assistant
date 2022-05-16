//  ###############################################################################
//  #                                                                             #
//  #                      #### Mohammad Abdul Rafay   #####                      #
//  #                      #### 99marafay@gmail.com    #####                      #
//  #                      #### Github: rafay99-epic   #####                      #
//  #                      #### The Aruth File in the  #####                      #
//  #                      #### Router Folder          #####                      #
//  #                                                                             #
//  ###############################################################################

//Express is used to start the node server
const express = require("express");
//this the controller for the add user data into the database
const authController = require("../controllers/auth")
//suggestion controller and calling the controller
const suggestionController = require("../controllers/suggest")
//calling the login controllerfrom the controller folders
const managerloginController = require("../controllers/managerlogin")
//calling the reservation rate
const reservationRate = require("../controllers/rent_rate")
//CALLING UPDATE rent.
const updateRentRate = require("../controllers/update_rate")
//getting the user login controller from controller page
const userlogin = require("../controllers/userlogin")
//Calling the reverseparking controller
const reverseparking= require("../controllers/reverseparking")

//Enter Data into the Database
//Manager Side

//getting the router for the webpages.
const router = express.Router();
//Redirecting to the controller in there add user account
router.post("/register",authController.register);
//Redirecting to the suggestion  box for the user.
router.post("/suggestion",suggestionController.register);
//Redirecting to the login controllerfor the manager and for the user.
//router.post("/manager_login",managerloginController.managerlogin);
router.post("/manager_login",managerloginController.register);
//Redirecting to the rent rate.
router.post("/rent_rate",reservationRate.register);
//this will redirect to the update rent page
router.post("/update_rate",updateRentRate.register);


//View Data From the Database
//Manager Side

//redirecting to the usermanagerment curd oprations
const usermanagementController = require("../controllers/user-management-curd")
//this will redirect the user manager controller in the controller folder
router.get("/view-update-delete-user-profile",usermanagementController.view);
//View Suggestions in the suggestion pages
const suggestion_view = require("../controllers/suggestion_view")
router.get("/view-suggestions",suggestion_view.view);

//Enter Data into the Database
//User Section: 

//This will redirect to the user login controller
router.post("/user-login",userlogin.register);
//this will redirect to the reverseparking controller
router.post("/reverseparking",reverseparking.register);













//Exporting this module to run
module.exports = router;
   