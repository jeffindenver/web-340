/*
===============================================================================
; Title:  shepherd-assignment4.3.js
; Author: Professor Krasso
; Date:   3/11/2020
; Modified By: Jeff Shepherd
; Description: Status codes
;==============================================================================
*/
"use strict";

const header = require('../../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 4.3"));
console.log("");

const express = require("express");
const http = require("http");

let app = express();

app.get("/not-found", (request, response) => {
  response.status(404);
  response.json({
    error: "Oops! We couldn't find that."
  });
});

app.get("/ok", (request, response) => {
  response.status(200);
  response.json({
    message: "Okily dokily, the page loaded."
  });
});

app.get("/not-implemented", (request, response) => {
  response.status(501);
  response.json({
    error: "We're working on it, but it's not done yet."
  });
});

http.createServer(app).listen(8080, () => {
  console.log("Application started on port 8080.");
});
