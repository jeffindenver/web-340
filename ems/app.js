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

let app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.use(express.static(__dirname + "/public"));

app.get("/", function (request, response) {
  response.render("index", {
    title: "Home page"
  });
});

app.get("/list", function (request, response) {
  response.render("list", {
    title: "Employee List",
    employees: bobsEmployees
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

http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080.");
});
