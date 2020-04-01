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

const fruits = require("../shepherd-fruits");
const chai = require("chai");
const assert = chai.assert;

describe("fruits", function () {
  it("should return an array of fruits", function () {
    let f = fruits("Apple,Orange,Mango");
    assert(Array.isArray(f));
  });
});
