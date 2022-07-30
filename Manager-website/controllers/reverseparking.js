//  ###############################################################################
//  #                                                                             #
//  #                      #### Mohammad Abdul Rafay   #####                      #
//  #                      #### 99marafay@gmail.com    #####                      #
//  #                      #### Github: rafay99-epic   #####                      #
//  #                      #### The Contact server pg  #####                      #
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
    con.query("SELECT parking_location from reserved_parking WHERE parking_location  = ?", [reverse], (error,result) => {
        if(error){
            console.log(error);
        }
        if( result.length > 0 ){
            return res.render('reverseParking',{
                message : "The Parking Spot is Reserved...Select another Parking Spot"
            });
        }

        //Adding data into the Database
        con.query("INSERT INTO reserved_parking SET ?", 
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
                console.log("Parking Spot is Reserved");
                
                if(user_email == "99marafay@gmail.com"){
                    console.log("Manager Parking Slot Confirmation");
                    res.render('manager-reversed-parking',{
                        message: "Parking Alot is Reserved For Manager",
                    });
                }
                else{
                    console.log("User Parking Slot Confirmation");
                    res.render('reverseParking',{
                        message: "Parking Alot is Reserved",
                    });
                }


                
            }
        });
  
    })
}