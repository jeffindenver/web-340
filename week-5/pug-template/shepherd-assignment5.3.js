/*
===============================================================================
; Title:  shepherd-assignment5.3.js
; Author: Professor Krasso
; Date:   3/20/2020
; Modified By: Jeff Shepherd
; Description: Demo the Pug view engine
;==============================================================================
*/
"use strict";

const header = require('../../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 5.3"));
console.log("");

const express = require("express");
const http = require("http");
const pug = require("pug");
const path = require("path");

let app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", function(request, response) {
  response.render("index", {
    message: "Python-like syntax is nice, but braces don't bother me."
  });
});

http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080.");
});
