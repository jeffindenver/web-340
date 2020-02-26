/*
===============================================================================
; Title:  shepherd-assignment2.2.js
; Author: Professor Krasso
; Date:   2/26/2020
; Modified By: Jeff Shepherd
; Description: Express example
;==============================================================================
*/

"use strict";

const express = require("express");
const http = require("http");
const header = require('../../shepherd-header.js');

console.log(header.display("Jeff", "Shepherd", "Assignment 2.2"));
console.log("");

let app = express();
app.use(function(request, response) {
  console.log("In comes a request to: " + request.url);
  response.end("Hello World");
});

http.createServer(app).listen(8080);

