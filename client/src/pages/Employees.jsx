import { useEffect, useState } from "react";
import EmployeeList from "../components/EmployeeList.jsx";
import employeeService from "../services/employeeService";

const Employees = () => {
  const [rows, setRows] = useState([]);

  const [change, setChange] = useState(false);

  const reRender = () => {
    setChange(() => (!change));
  }

  const employees = async () => {
    const {data} = await employeeService.getAllEmployee();
    const rows = data;
    if (!rows) {
        // & Do later
    } else {
        rows.forEach((item, index) => {
            item.sl = index + 1;
          });
        setRows(rows);
    }
  };

  useEffect(() => {
    employees();
  }, [change]);

  return (
    <>
      <EmployeeList rows={rows} setChange={reRender}/>
    </>
  );
};
export default Employees;
