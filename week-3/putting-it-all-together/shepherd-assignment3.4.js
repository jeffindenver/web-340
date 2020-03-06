/*
===============================================================================
; Title:  shepherd-assignment3.4.js
; Author: Professor Krasso
; Date:   3/5/2020
; Modified By: Jeff Shepherd
; Description: putting it all together
;==============================================================================
*/

"use strict";

const header = require('../../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 3.4"));
console.log("");

const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");

let app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function(request, response) {
  response.render("index", {
    message: "home page"
  });
});

app.get("/about", function(request, response) {
  response.render("about", {
    message: "about page"
  });
});

app.get("/contact", function(request, response) {
  response.render("contact", {
    message: "contact page"
  });
});

app.get("/products", function(request, response) {
  response.render("products", {
    message: "products page"
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
