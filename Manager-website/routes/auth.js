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


//getting the router for the webpages.
const router = express.Router();
//Redirecting to the controller in there add user account
router.post("/register",authController.register);
//Redirecting to the suggestion  box for the user.
router.post("/suggestion",suggestionController.register);
//Redirecting to the login controllerfor the manager and for the user.
//router.post("/manager_login",managerloginController.managerlogin);
router.post("/manager_login",managerloginController.register);
//Exporting this module to run
module.exports = router;
   