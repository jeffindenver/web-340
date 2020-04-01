/*
===============================================================================
; Title:  employee.js
; Author: Professor Krasso
; Date:   4/1/2020
; Modified by: Jeff Shepherd
; Description: File for the employee database model
;==============================================================================
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true}
});

let Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
