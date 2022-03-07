//  ###############################################################################
//  #                                                                             #
//  #                      #### Mohammad Abdul Rafay   #####                      #
//  #                      #### 99marafay@gmail.com    #####                      #
//  #                      #### Github: rafay99-epic   #####                      #
//  #                      #### The Contact server pg  #####                      #
//  #                                                                             #
//  ###############################################################################


//sql file to use for the connection.
const mysql = require("mysql");

const db = mysql.createConnection({
    //All of the values are in the .env file where they will be saved
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.register =(req,res) => {
    console.log(req.body);

    //values from the form will be getting here and from here to the variables.
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    //checking if there is an email that is already into the database.
    db.query("SELECT Email from contact_page WHERE Email  = ?", [email], (error,result) => {
        if(error){
            console.log(error);

        }
        if( result.length > 0 ){
            return res.render('contact',{
                message : "That Email already exists with the message"
            });
        }


        //Adding data into the Database
        db.query("INSERT INTO contact_page SET ?", {Name:name, Email:email, Subject:subject, Message: message}, (error, result) => {
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