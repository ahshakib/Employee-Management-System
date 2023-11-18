/* eslint-disable react/prop-types */
import { Add, DescriptionSharp, Edit } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import ShowDetailsModal from "./ShowDetailsModal";

// const rows = [
//   { id: 1, name: "Snow", age: 35, position: "Software Engineer" },
//   { id: 2, name: "Lannister", age: 42, position: "Software Engineer" },
//   { id: 3, name: "Lannister", age: 45, position: "Software Engineer" },
//   { id: 4, name: "Stark", age: 16, position: "Software Engineer" },
//   { id: 5, name: "Targaryen", age: 34, position: "Software Engineer" },
//   { id: 6, name: "Melisandre", age: 50, position: "Software Engineer" },
//   { id: 7, name: "Clifford", age: 44, position: "HR" },
//   { id: 8, name: "Frances", age: 36, position: "Software Engineer" },
//   { id: 9, name: "Roxie", age: 65, position: "Software Engineer" },
// ];

export default function EmployeeList(props) {
  // eslint-disable-next-line no-unused-vars
  const columns = [
    { field: "sl", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
    },
    {
      field: "position",
      headerName: "Position",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 350,
      renderCell: (params) => {
        return (
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button color="success" variant="outlined" startIcon={<Edit />}>
              Edit
            </Button>
            <Button
              color="primary"
              variant="outlined"
              startIcon={<DescriptionSharp />}
              onClick={(e) => {
                e.stopPropagation()
                setOpen(() => true);
                setSingleUser(() => params.row)
              }}
            >
              Details
            </Button>
            <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
              Delete
            </Button>
          </Box>
        );
      },
    },
  ];

  const [changes, setChanges] = useState(false);

  const [rows, setRows] = useState([]);

  const [singleUser, setSingleUser] = useState({
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
  });

  const [open, setOpen] = useState(false);

  const resetModal = () => {
    setSingleUser(() => ({
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
    }));
    setOpen(() => false);
  };

  const resetChanges = () => {
    setChanges(() => !changes);
  };

  useEffect(() => {
    setRows(props.rows);
  }, [props.rows]);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <ShowDetailsModal
        open={open}
        data={singleUser}
        resetModal={resetModal}
        setChanges={resetChanges}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
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
          Employee List
        </Typography>
        <Button variant="contained" color="secondary" startIcon={<Add />}>
          Add Employee
        </Button>
      </Box>

      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
