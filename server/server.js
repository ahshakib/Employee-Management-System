require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const cors = require("cors");

app.use(bodyParser.json());

const PORT = process.env.PORT;

const allowedOrigins = ['http://localhost:5173']; // Replace with your front-end URL
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDB();
app.use('/api/users', require('./routes/api/user'))
app.use('/api/employee', require('./routes/api/employeeServices'))
