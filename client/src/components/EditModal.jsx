/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";

import { useEffect, useState } from "react";
import employeeService from "../services/employeeService";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const EditModal = (props) => {
  const [open, setOpen] = useState(false);
  const [uid, setUid] = useState("");
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [joiningDate, setJoiningDate] = useState(Date);
  const [salary, setSalary] = useState(0);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    if (props.openEdit) {
      setOpen(() => props.openEdit);
      setUid(() => props.dataEdit._id);
      setId(() => props.dataEdit.id);
      setName(() => props.dataEdit.name);
      setEmail(() => props.dataEdit.email);
      setAge(() => props.dataEdit.age);
      setPhone(() => props.dataEdit.phone);
      setAddress(() => props.dataEdit.address);
      setPosition(() => props.dataEdit.position);
      setSalary(() => props.dataEdit.salary);
      setSkills(() => props.dataEdit.skills);
      setJoiningDate(() => props.dataEdit.joiningDate)
    }
  }, [props.openEdit]);

  const handleSubmit = async () => {
    const employeeData = {
      id,
      name,
      age,
      position,
      email,
      phone,
      address,
      joiningDate,
      salary,
      skills,
    };
    const logger = await employeeService.editEmployee(uid, employeeData);
    if (logger.isError) {
      alert('Something wrong! Please try again.')
    } else {
      console.log(logger.user);
      doneEdit();
    }
  };

  const resetModal = () => {
    setId(() => 0)
    setName(() => "");
    setEmail(() => "");
    setAge(() => 0);
    setPhone(() => "");
    setAddress(() => "");
    setPosition(() => "");
    setSalary(() => 0);
    setSkills(() => "");
  };

  const handleClose = () => {
    resetModal();
    props.resetOpenEditModal();
    setOpen(false);
  };

  const doneEdit = () => {
    props.setChanges();
    resetModal();
    setOpen(() => false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box
        sx={{
          bgcolor: "backgroundColor.main",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Card sx={{ px: 3 }}>
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <DialogTitle id="alert-dialog-title" variant="h4" component="h2">
              Edit Employee
            </DialogTitle>
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoComplete="name"
                    defaultValue={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="age"
                    required
                    fullWidth
                    id="age"
                    label="Age"
                    defaultValue={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="position"
                    label="Position"
                    name="position"
                    defaultValue={position}
                    onChange={(e) => setPosition(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    defaultValue={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="phone"
                    label="Phone"
                    name="phone"
                    autoComplete="phone"
                    defaultValue={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    autoComplete="address"
                    defaultValue={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="salary"
                    label="Salary"
                    name="salary"
                    defaultValue={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="skills"
                    label="Skills"
                    name="skills"
                    defaultValue={skills}
                    onChange={(e) => setSkills(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid>
                <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleSubmit} startIcon={<CheckIcon/>}>
                  Submit
                </Button>
                <Button variant="contained" color="error" sx={{ mt: 3, mb: 2, ml: 2 }} onClick={handleClose} startIcon={<CloseIcon/>}>
                  Cancel
                </Button>
              </Grid>
            </Box>
          </Box>
        </Card>
      </Box>
    </Dialog>
  );
};

export default EditModal;
