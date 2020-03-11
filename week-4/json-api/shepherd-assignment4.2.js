/*
===============================================================================
; Title:  shepherd-assignment4.2.js
; Author: Professor Krasso
; Date:   3/11/2020
; Modified By: Jeff Shepherd
; Description: JSON APIs
;==============================================================================
*/
"use strict";

const header = require('../../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 4.2"));
console.log("");

const express = require("express");
const http = require("http");
let app = express();

app.get("/customer/:id", function(request, response) {
  let id = parseInt(request.params.id, 10);

  response.json({
    firstName: "Isaac",
    lastName: "Asimov",
    employeeID: id
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
