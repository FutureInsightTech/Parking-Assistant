//  ###############################################################################
//  #                                                                             #
//  #                      #### Mohammad Abdul Rafay   #####                      #
//  #                      #### 99marafay@gmail.com    #####                      #
//  #                      #### Github: rafay99-epic   #####                      #
//  #                      #### The Aruth File in the  #####                      #
//  #                      #### Controller Folder      #####                      #
//  #                                                                             #
//  ###############################################################################

//sql file to use for the connection.
const mysql = require("mysql");
//webtoken for login 
const jwt = require("jsonwebtoken");
//encript password using bcryptsjs 
const bcrypt = require("bcryptjs")
//connection with the datbase
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
    const user_name = req.body.user_name;
    const user_email = req.body.user_email;
    const user_password = req.body.user_password;
    const user_DOB= req.body.DOB;

    //checking if there is an email that is already into the database.
    db.query("SELECT user_email  from user WHERE user_email  = ?", [user_email], async(error,result) => {
        if(error){
            console.log(error);

        }
        if( result.length > 0 ){
            return res.render('add-user',{
                message : "That email is already in use"
            });
        }

        //hassing the password for 8 rounds
        let hashedpassword = await bcrypt.hash(user_password, 8);
        //see the hashed password in the terminal.
        console.log(hashedpassword);
        

        //Adding data into the Database
        db.query("INSERT INTO user SET ?", {user_email:user_email, user_name:user_name, user_password:hashedpassword, user_date_of_birth: user_DOB}, (error, result) => {
            if(error){
                console.log("error");
            }
            else{
                console.log("Data is Sent to the database");
                res.render('add-user',{
                    message: "User is Added successfully"
                });
            }
        });

        // res.send("testing");




        
    })


    



    //res.send("Form is Submitted");
}