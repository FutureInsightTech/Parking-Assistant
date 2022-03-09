const con = require("../database/connection");
const bcrypt = require("bcryptjs");
const sessionfile = require("../session/session");

exports.register = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const sqlString = "SELECT password FROM manager WHERE email = ?";

  con.query(sqlString, [email], async (err, results, fields) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    if (!results.length) {
      console.log(" The Username is Invalid ");
      res.redirect("/manager_login");
      res.end();
      return;
    }
    const isValid = await bcrypt.compare(password, results[0].password);
    if (isValid) {
      res.redirect("/manager-dashboard");
      res.end();
    } else {
      console.log("The Password is Invalid");
      res.redirect("/manager_login");
      res.end();
      return;
    }
  });
};
