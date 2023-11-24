import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useState } from "react";
import employeeService from "../services/employeeService";

export default function AddEmployee(props) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    position: "",
    email: "",
    phone: "",
    address: "",
    department: "",
    salary: "",
    skills: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: e.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await employeeService.addEmployee(formData);
      if(!res.isError) {
        alert("Information Successfully Inserted")
        props.handleClose()
      } else {
        alert("Please try again")
      }
    } catch (e) {
      alert(e.message)
    }
    setFormData({
      id: "",
      name: "",
      age: "",
      position: "",
      email: "",
      phone: "",
      address: "",
      department: "",
      salary: "",
      skills: "",
    });
  };

  return (
    <React.Fragment>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              padding: "20px",
              fontWeight: "bold",
              color: "darkcyan",
              fontFamily: "revert-layer",
            }}
          >
            Add Employee Information
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box
            component="form"
            Validate
            //onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <TextField
                  autoComplete="id"
                  name="id"
                  required
                  fullWidth
                  id="id"
                  label="ID"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={9}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="given-name"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  name="age"
                  autoComplete="age"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="position"
                  label="Position"
                  id="position"
                  autoComplete="position"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="Email"
                  id="email"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Phone"
                  id="phone"
                  autoComplete="phone"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  id="address"
                  autoComplete="address"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="department"
                  label="Department"
                  id="department"
                  autoComplete="department"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="salary"
                  label="Salary"
                  id="salary"
                  autoComplete="salary"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="skills"
                  label="Skills"
                  id="skills"
                  autoComplete="skills"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid>
              <Button
                type="submit"
                
                variant="contained"
                onClick={handleSubmit}
                startIcon={<CheckIcon />}
                sx={{ mt: 3, mb: 2, mr: 2 }}
              >
                Submit
              </Button>
              <Button
                type="submit"
                
                variant="contained"
                color="error"
                startIcon={<CloseIcon />}
                onClick={props.handleClose}
                sx={{ mt: 3, mb: 2 }}
              >
                Cancel
              </Button>
            </Grid>
          </Box>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={props.handleClose}>Subscribe</Button>
        </DialogActions> */}
      </Dialog>
    </React.Fragment>
  );
}
