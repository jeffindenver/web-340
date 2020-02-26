/*
===============================================================================
; Title:  shepherd-assignment2.4.js
; Author: Professor Krasso
; Date:   2/26/2020
; Modified By: Jeff Shepherd
; Description: Express example, Views
;==============================================================================
*/

"use strict";

const express = require("express");
const http = require("http");
const path = require("path");

let app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.get("/", function (request, response) {
  response.render("index", {
    firstName: "Jeff",
    lastName: "Shepherd",
    address: "9000 Main St"
  });
});

http.createServer(app).listen(8080, function(){
  console.log("EJS-Views app started on port 8080.");
});
