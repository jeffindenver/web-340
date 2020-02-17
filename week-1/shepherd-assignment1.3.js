/*
===============================================================================
; Title:  shepherd-assignment1.3.js
; Author: Professor Krasso
; Date:   2/17/2020
; Modified By: Jeff Shepherd
; Description: How to parse a node.js URL
;==============================================================================
*/

"use strict";

const url = require("url");
const header = require('../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 1.3"));
console.log("");

const parsedURL = url.parse("https://www.example.com/profile?name=shepherd");
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
