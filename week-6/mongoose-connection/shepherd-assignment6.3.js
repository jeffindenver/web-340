/*
===============================================================================
; Title:  shepherd-assignment6.2.js
; Author: Professor Krasso
; Date:   3/20/2020
; Modified By: Jeff Shepherd
; Description: Demo of MongoDB connection
;==============================================================================
*/
"use strict";

const header = require('../../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 5.3"));
console.log("");

const express = require("express");
const http = require("http");
const logger = require("morgan");
const mongoose = require("mongoose");

let mongoDB = "mongodb+srv://jshepherd:71VwzVhDGq3DDozG@buwebdev-cluster-1-solm5.mongodb.net/test"

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function () {
  console.log("Application connected to MongoDB instance");
});

let app = express();
app.use(logger("short"));

app.get("/", function (request, response) {
  response.send("Hello Mongo");
});

http.createServer(app).listen(8080, function () {
  console.log("Application connected to port 8080.");
});
