/*
===============================================================================
; Title:  shepherd-assignment3.3.js
; Author: Professor Krasso
; Date:   2/25/2020
; Modified By: Jeff Shepherd
; Description: advanced routing
;==============================================================================
*/

"use strict";

const header = require('../../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 3.3"));
console.log("");

const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");

let app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/:productId", function(request, response) {
  let productId = parseInt(request.params.productId, 10);
  response.render("index", {
    productId: productId
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
