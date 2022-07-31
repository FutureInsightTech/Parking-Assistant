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
    const rent = req.body.rate_number;
        //Adding data into the Database
        con.query("UPDATE parking_rate SET Parking_rate =? WHERE ID =1",{Parking_rate:rent},(error) => {
            if(!error){
                console.log("Parking Reversation Rate is Set....");
                res.render('set-parking-rate',{
                    message: "Old Value has been Modified..."
                });
            }
            else{
                console.log(error);
            }
        });
  
    }
