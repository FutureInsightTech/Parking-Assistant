const con = require("../database/connection");
const bcrypt = require("bcryptjs")
const sessionfile = require("../session/session");

exports.register =(req,res,next) => {

    // console.log("Her I am ");
    const email = req.body.email;
    const password = req.body.password;
    // console.log(req.body.email);
    // console.log(req.body.password);

    var sql = "SELECT * from manager WHERE email = ?";

    con.query(sql,[email], function(err, result,fields) {
        if(err) {
            console.log(err);
        }
        if (result.length && bcrypt.compareSync(password, result[0].password)) {
            req.session.email = email;
            console.log(req.session.email);
            console.log("You are logged in successfully");
            res.render('manager-dashboard',{
                message: 'Welcome!!,'+ req.session.email
            });
            res.redirect("/manager-dashboard");
        }
    });

}