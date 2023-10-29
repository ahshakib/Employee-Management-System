const express = require("express");
const router = express.Router();
//const { body, validationResult } = require("express-validator");
const authenticateToken = require("../../middleware/auth");
const EmployeeInfo = require("../../models/EmployeeInfo");

router.post("/addemployeeinfo", authenticateToken, async (req, res) => {
  try {
    const name = req.body.firstName + " " + req.body.lastName;

    const employeeInfoObj = {
      id: req.body.id,
      name: name,
      age: req.body.age,
      position: req.body.position,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      department: req.body.department,
      joiningDate: req.body.joiningDate,
      salary: req.body.salary,
      skills: req.body.skills,
      education: req.body.education,
    };
    const employeeInfo = new EmployeeInfo(employeeInfoObj);
    await employeeInfo.save();
    res.status(201).json(employeeInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something is wrong!" });
  }
});

router.get("/getemployeeinfo", authenticateToken, async (req, res) => {
  try {
    const employee = await EmployeeInfo.find({}).select("name age position");
    res.json(employee);
  } catch (error) {
    res.json(error);
  }
});

router.get("/getemployeeinfodetails", authenticateToken, async (req, res) => {
  try {
    const employees = await EmployeeInfo.find({});
    res.json(employees);
  } catch (error) {
    res.json(error);
  }
});

router.delete(
  "/deleteemployeeinfo/:id",
  authenticateToken,
  async (req, res) => {
    try {
      const id = req.params.id;
      const employee = await EmployeeInfo.findByIdAndDelete(id);
      res.json(employee);
    } catch (error) {
      res.json("Something is error");
    }
  }
);

router.get(
  "/employee-info-by-position",
  authenticateToken,
  async (req, res) => {
    try {
      const position = req.body.position;
      const employee = await EmployeeInfo.find({ position }).select(
        "name age position"
      );
      if (employee) {
        res.json(employee);
      } else {
        res.status(404).json("Employee Not Found");
      }
    } catch (error) {
      res.json("Something is error");
    }
  }
);

router.get("/employee-info-by-search", authenticateToken, async (req, res) => {
  try {
    const name = req.body.name;
    const employee = await EmployeeInfo.find({ name }).select(
      "name age position"
    );
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json("Employee Not Found");
    }
  } catch (error) {
    res.json("Something is error");
  }
});

router.get(
  "/employee-info-by-department",
  authenticateToken,
  async (req, res) => {
    try {
      const department = req.body.department;
      const employee = await EmployeeInfo.find({ department }).select(
        "name age position"
      );
      if (employee) {
        res.json(employee);
      } else {
        res.status(404).json("Employee Not Found");
      }
    } catch (error) {
      res.json("Something is error");
    }
  }
);

router.put("/update-employee-info/:id", authenticateToken, async (req, res) => {
  try {
    const id = req.params.id;
    req.body.name = req.body.firstName + " " + req.body.lastName;
    const body = req.body;

    const employee = await EmployeeInfo.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json("Employee Not Found");
    }
  } catch (error) {
    res.json("Something is wrong!");
  }
});

module.exports = router;
