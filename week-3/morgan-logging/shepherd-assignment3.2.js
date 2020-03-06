/*
===============================================================================
; Title:  shepherd-assignment3.2.js
; Author: Professor Krasso
; Date:   3/5/2020
; Modified by: Jeff Shepherd
; Description: Demonstrates how to configure the
; Morgan logger
;==============================================================================
*/

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
    message: "Morgan? Who's Morgan? Dexter? Dexter who?"
  });
});

http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080");
});
