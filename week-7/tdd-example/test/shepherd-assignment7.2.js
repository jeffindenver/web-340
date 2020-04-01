/*
===============================================================================
; Title:  shepherd-assignment7.2.js
; Author: Professor Krasso
; Date:   4/1/2020
; Modified By: Jeff Shepherd
; Description: tdd-example
;==============================================================================
*/
"use strict";

const assert = require("assert");

describe("String#split", function () {
  it("should return an array of fruits", function () {
    assert(Array.isArray("Apple,Orange,Mango".split(",")));
  });
});
