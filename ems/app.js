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

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

app.get("/", function (request, response) {
  response.render("index", {
    title: "Home page"
  });
});

http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080.");
});
