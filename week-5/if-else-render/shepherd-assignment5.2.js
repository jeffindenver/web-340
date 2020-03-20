/*
===============================================================================
; Title:  shepherd-assignment5.2.js
; Author: Professor Krasso
; Date:   3/20/2020
; Modified By: Jeff Shepherd
; Description: if-else-render
;==============================================================================
*/
"use strict";

const header = require('../../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 5.2"));
console.log("");

const express = require("express");
const http = require("http");
const path = require("path");

let app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

let n = ["Joe", "Sally", "Mick", "Linda"];

app.get("/", function(request, response) {
  response.render("index", {
    names: n
  });
});

http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080.");
});
