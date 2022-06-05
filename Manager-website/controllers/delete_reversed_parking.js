function delete_data()
{
    const con = require("../database/connection");
    //sql file to use for the connection.
    const mysql = require("mysql");
    const express = require("express");

    var reversed_ID;
    var user_email;
    var parking_spot;
    var start_time;
    var end_time;

    exports.view = (req, res) => {
        con.query("SELECT * FROM reserved_parking ", (error, rows) => {
          if(!error) 
          {
            rows.reversed_ID = reversed_ID;
            rows.user_email = user_email;
            rows.parking_spot = parking_spot;
            rows.start_time = start_time;
            rows.enend_time = end_time;
          }
          else {
            console.log(error);
          }
        });
    
        // Query to delete data 
        const deletequery = "DELETE FROM reserved_parking WHERE parking_spot = ?"
        // Comparing and running time
        var conditionChecker = (start_time.getTime() === end_time.getTime())    
        console.log('Both times are equal...Now Deleteing the parking Spot');
        // running the query 
        con.query(deletequery,[conditionChecker],(error) => {
            if(!error)
            {
                console.log("Time is Up...Parking Slot Deleted");
            }
            else
            {
                console.log(error);
                console.log("The code is working and time is not up...yet!!.");
            }
    
        });
    };
    
}
setTimeout(delete_data, 3000);




