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

    //checking if there is an email that is already into the database.
    con.query("SELECT ID from parking_rate WHERE ID  = 1", (error,result) => {
        if(!error){
            return res.render('set-parking-rate',{
                message : "Rate is Already Defined."
            });
        }
        else
        {
            console.log(error);
        }
        // if( result.length > 0 ){
        //     return 
        // }

        //Adding data into the Database
        con.query("INSERT INTO parking_rate SET ?", {Parking_rate:rent}, (error) => {
            if(!error){
                console.log("Parking Reversation Rate is Set....");
                res.render('set-parking-rate',{
                    message: "Value is Set..."
                });
            }
            else{
                console.log(error);
            }
        });
  
    }
    )
}