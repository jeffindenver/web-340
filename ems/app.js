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
console.log(header.display("Jeff", "Shepherd", "Assignment 5.2"));
console.log("");

const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");

let app = express();

let bobsEmployees = [{
    firstName: "Jeff",
    lastName: "Shepherd",
    email: "jeff@email.com"
  },
  {
    firstName: "Luke",
    lastName: "Skywalker",
    email: "luke@jediKnights.com"
  },
  {
    firstName: "Han",
    lastName: "Solo",
    email: "scruffy@nerfherder.com"
  }
];

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

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
