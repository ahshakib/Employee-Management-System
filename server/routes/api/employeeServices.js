const express = require("express");
const router = express.Router();
//const { body, validationResult } = require("express-validator");
const authenticateToken = require("../../middleware/auth");
const EmployeeInfo = require('../../models/EmployeeInfo')

router.post(
    "/addemployeeinfo",
    authenticateToken,
    async (req, res) => {
      try {
        const employeeInfoObj = {
            id: req.body.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            position: req.body.position,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            department: req.body.department,
            joiningDate: req.body.joiningDate,
            salary: req.body.salary,
            skills: req.body.skills,
            education: req.body.education
        };
        const employeeInfo = new EmployeeInfo(employeeInfoObj);
        await employeeInfo.save();
        res.status(201).json(employeeInfo);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something is wrong!" });
      }
    }
  );

  router.get("/getemployeeinfo", authenticateToken, async (req, res) => {
    try {
      const employee = await EmployeeInfo.find({}).select('firstName lastName age position')
      res.json(employee)
    } catch (error) {
      res.json(error)
    }
  })

  router.get("/getemployeeinfodetails", authenticateToken, async (req, res) => {
    try {
      const employees = await EmployeeInfo.find({})
      res.json(employees)
    } catch (error) {
      res.json(error)
    }
  })

  router.delete("/deleteemployeeinfo/:id", authenticateToken, async (req, res) => {
    try {
      const id = req.params.id
      const employee = await EmployeeInfo.findByIdAndDelete(id)
      res.json(employee)
    } catch (error) {
      res.json("Something error")
    }
  })

  module.exports = router