const mongoose = require("mongoose");

const EmployeeInfoSchema = mongoose.Schema({
  id: Number,
  firstName: String,
  lastName: String,
  age: Number,
  position: String,
  email: String,
  phone: String,
  address: String,
  department: String,
  joiningDate: Date,
  salary: Number,
  skills: Array,
  education: Array
});

module.exports = EmployeeInfo = mongoose.model("EmployeeInfo", EmployeeInfoSchema)
