/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2007" : "#f5ffff",
  width: 450,
  margin: "15px",
  padding: "15px",
  [theme.breakpoints.down("md")]: {
    margin: "5px",
  },
}));

const ShowDetailsDialog = (props) => {
  const [modalData, setModalData] = useState({
    open: false,
    data: {
      id: 0,
      name: "",
      age: 0,
      position: "",
      email: "",
      phone: "",
      address: "",
      joiningDate: Date,
      salary: 0,
      skills: [],
    },
  });

  const resetModal = () => {
    props.resetModal();
    setModalData(() => ({
      open: false,
      data: {
        id: 0,
        name: "",
        age: 0,
        position: "",
        email: "",
        phone: "",
        address: "",
        joiningDate: Date,
        salary: 0,
        skills: [],
      },
    }));
  };

  useEffect(() => {
    console.log("rendering show detail dialog modal");
    if (props.open) {
      setModalData(() => ({
        open: props.open,
        data: props.data,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.open]);

  // eslint-disable-next-line react/prop-types

  return (
    <>
      <Dialog
        open={modalData.open}
        onClose={resetModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <StyledCard>
            <Box>
              <Divider>
                <Typography variant="h4" component="h2">
                  Employee Details
                </Typography>
              </Divider>
            </Box>
            <DialogContent id="modal-description" sx={{ mx: 2 }}>
            <Typography variant="h6" component="h4">
                ID: {`${modalData.data.id}`}
              </Typography>
              <Typography variant="h6" component="h2">
                Name: {`${modalData.data.name}`}
              </Typography>
              <Typography variant="h6" component="h2">
                Age: {`${modalData.data.age}`}
              </Typography>
              <Typography variant="h6" component="h2">
                Position: {`${modalData.data.position}`}
              </Typography>
              <Typography variant="h6" component="h2">
                Email: {`${modalData.data.email}`}
              </Typography>
              <Typography variant="h6" component="h2">
                Phone: {`${modalData.data.phone}`}
              </Typography>
              <Typography variant="h6" component="h2">
                Address: {`${modalData.data.address}`}
              </Typography>
              <Typography variant="h6" component="h2">
                Department: {`${modalData.data.department}`}
              </Typography>
              <Typography variant="h6" component="h2">
                Joining Date: {`${modalData.data.joiningDate}`}
              </Typography>
              <Typography variant="h6" component="h2">
                Salary: {`${modalData.data.salary}`}
              </Typography>
              <Typography variant="h6" component="h2">
                Skills: {`${modalData.data.skills}`}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  resetModal();
                }}
                autoFocus
                variant="contained"
                startIcon={<CloseIcon/>}
              >
                Close
              </Button>
            </DialogActions>
          </StyledCard>
        </Box>
      </Dialog>
    </>
  );
};

export default ShowDetailsDialog;
