//  ###############################################################################
//  #                                                                             #
//  #                      #### Mohammad Abdul Rafay   #####                      #
//  #                      #### 99marafay@gmail.com    #####                      #
//  #                      #### Github: rafay99-epic   #####                      #
//  #                      #### The permission for Slot  #####                    #
//  #                                                                             #
//  ###############################################################################

//connection with the database and fetching the connection file from the datbase folder.
var con = require("../database/connection");

exports.register =(req,res) => {
    console.log(req.body);

    //values from the form will be getting here and from here to the variables.
    const reverse = req.body.reverse;
    const start_time = req.body.start_time;
    const end_time = req.body.end_time;
    const user_email = req.body.user_email;

    //checking if there is an email that is already into the database.
    con.query("SELECT parking_location from Approval_Parking WHERE parking_location  = ?", [reverse], (err,result) => {
        if(err){
            console.log(err);
        }
        if( result.length > 0 ){
            return res.render('reverseParking',{
                message : "Sorry ParkingSlot is Taken!",
            });
        }

        //Adding data into the Database
        con.query("INSERT INTO Approval_Parking SET ?", 
        {
            parking_location: reverse,
            start_time: start_time,
            end_time: end_time,
            user_email: user_email
        },(error, result) => {
            if(error){
                console.log(error);
                console.log("error");
            }
            else{
                console.log("Manager need to approve the parking Slot Location");
                res.render('reverseParking',{
                    message: "Waiting for Manager Approval",
                });
            }
        });
  
    })
}