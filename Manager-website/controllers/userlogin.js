const con = require("../database/connection");
const bcrypt = require("bcryptjs");
const sessionfile = require("../session/session");

exports.register = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const sqlString = "SELECT user_password FROM user WHERE user_email = ?";

  con.query(sqlString, [email], async (err, results, fields) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    if (!results.length) {
      console.log(" The Username is Invalid ");
      res.redirect("/user-login");
      res.end();
      return;
    }
     const isValid = await bcrypt.compare(password, results[0].user_password);
    
    if (isValid) {
      res.redirect("/user_dashboard");
      res.end();
    } else {
    
      res.redirect("/user-login");
      res.end();
      return;
    }
  });
};
