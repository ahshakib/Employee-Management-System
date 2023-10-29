require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

app.use(bodyParser.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDB();
app.use('/api/users', require('./routes/api/user'))
app.use('/api/employee', require('./routes/api/employeeServices'))
