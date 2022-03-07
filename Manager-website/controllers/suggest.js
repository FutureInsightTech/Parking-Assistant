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
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    //checking if there is an email that is already into the database.
    con.query("SELECT Email from contact_page WHERE Email  = ?", [email], (error,result) => {
        if(error){
            console.log(error);

        }
        if( result.length > 0 ){
            return res.render('contact',{
                message : "That Email already exists with the message"
            });
        }

        //Adding data into the Database
        con.query("INSERT INTO contact_page SET ?", {Name:name, Email:email, Subject:subject, Message: message}, (error, result) => {
            if(error){
                console.log("error");
            }
            else{
                console.log("Suggestion in the Database...");
                res.render('contact',{
                    message: "Suggestion is Sent."
                });
            }
        });
  
    })
}