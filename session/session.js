const express = require("express");
const session = require("express-session");

const server = express();

server.use(session({
    secret: "ABCDefg",
    resave: false,
    saveUninitialized: true,
}));

module.exports = session;