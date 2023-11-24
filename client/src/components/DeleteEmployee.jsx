import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import employeeService from "../services/employeeService";

export default function DeleteEmployee(props) {

    const handleDeleteEmployee = async(id) => {
        try {
            const res = await employeeService.deleteEmployee(id)

            if(!res.isError) {
                alert(res.message)
                props.handleClose()
            } else {
                alert(res.message)
            }
        } catch (error) {
            alert("Something wrong")
        }
    }

  return (
    <React.Fragment>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Delete <strong>{props.data.name}</strong>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you really want to delete {props.data.name}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.handleClose()}>Disagree</Button>
          <Button onClick={()=> handleDeleteEmployee(props.data._id)} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
