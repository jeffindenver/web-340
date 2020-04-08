/*
===============================================================================
; Title:  app.js
; Author: Professor Krasso
; Date:   3/20/2020
; Modified By: Jeff Shepherd
; Description: employee management system
;==============================================================================
*/
"use strict";

const header = require('../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "EMS assignment"));
console.log("");

const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const Employee = require("./models/employee");

const mongoDB = "mongodb+srv://jshepherd:71VwzVhDGq3DDozG@buwebdev-cluster-1-solm5.mongodb.net/test"

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function () {
  console.log("Application connected to MongoDB instance.");
});

let bobsEmployees = [
  new Employee({
    firstName: "Jeff",
    lastName: "Shepherd"
  }),
  new Employee({
    firstName: "Luke",
    lastName: "Skywalker"
  }),
  new Employee({
    firstName: "Han",
    lastName: "Solo"
  })
];

let csrfProtection = csrf({cookie:true});

let app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(helmet.xssFilter());
app.use(express.static(__dirname + "/public"));

app.use(function(request, response, next) {
  let token = request.csrfToken();
  response.cookie("XSRF-TOKEN", token);
  response.locals.csrfToken = token;
  next();
});

app.get("/", function (request, response) {
  response.render("index", {
    title: "Home page"
  });
});

app.get("/about", function (request, response) {
  response.render("about", {
    title: "About Bob's Factory"
  });
});

app.get("/contact", function (request, response) {
  response.render("contact", {
    title: "Contact Bob's Factory"
  });
});

app.get("/list", function (request, response) {
  response.render("list", {
    title: "Employee List",
    employees: bobsEmployees
  });
});

app.get("/new", function (request, response) {
  response.render("new", {
    title: "EMS | New"
  });
});

app.post("/process", function(request, response) {
  if(!request.body.txtFirstName || !request.body.txtLastName) {
    response.status(400).send("Entries must have a first and last name.");
    return;
  }

  const firstName = request.body.txtFirstName;
  const lastName = request.body.txtLastName;
  console.log(firstName + " " + lastName);

  let employee = new Employee({
    firstName: firstName,
    lastName: lastName
  });
});




http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080.");
});
