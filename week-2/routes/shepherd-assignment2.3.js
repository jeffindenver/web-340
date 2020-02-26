/*
===============================================================================
; Title:  shepherd-assignment2.3.js
; Author: Professor Krasso
; Date:   2/26/2020
; Modified By: Jeff Shepherd
; Description: Express example, Routes
;==============================================================================
*/

"use strict";

const express = require("express");
const http = require("http");
const header = require('../../shepherd-header.js');

console.log(header.display("Jeff", "Shepherd", "Assignment 2.3"));
console.log("");

let app = express();

app.get("/", function(request, response) {
  response.end("Welcome to the homepage!");
});

app.get("/about", function(request, respons) {
  response.end("Welcome to the about page!");
});

app.get("/contact", function(request, response) {
  response.end("Welcome to the contact page!");
});

app.use(function (request, response) {
  response.statusCode = 404;
  response.end("404");
});

http.createServer(app).listen(8080);
