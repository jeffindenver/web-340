/*
===============================================================================
; Title:  shepherd-assignment1.5.js
; Author: Professor Krasso
; Date:   2/17/2020
; Modified By: Jeff Shepherd
; Description: node.js sample
;==============================================================================
*/

const http = require("http");

function processRequest(req, res) {

  let body = "May the Force be with you.";

  let contentLength = body.length;

  res.writeHead(200, {

    'Content-Length': contentLength,

    'Content-Type': 'text/plain'

  });

  res.end(body);

}

let s = http.createServer(processRequest);

s.listen(8080);
