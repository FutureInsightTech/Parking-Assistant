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

const suggestionController = require("../controllers/suggest")

//getting the router for the webpages.
const router = express.Router();
//Redirecting to the controller in there add user account
router.post("/register",authController.register);
//Redirecting to the suggestion  box for the user.
router.post("/suggestion",suggestionController.register);

module.exports = router;
   