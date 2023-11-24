import Axios from "../axios/index.js";

const getAllEmployee = async() => {
    try {
        const allEmployee = await Axios.get("/employee/getallemployee")
        return allEmployee
    } catch (error) {
        console.log(error)
    }
}

const editEmployee = async(id, employee) => {
    try {
        const updateEmployee = await Axios.put(`/employee/update-employee-info/${id}`, employee)

        if(!updateEmployee) {
            return { isError: true, message: "Employee data cannot be updated"}
        } else {
            return {message: "Employee data updated", employee: updateEmployee}
        }


    } catch (error) {
        return { isError: true, message: "Something went wrong!!"}
    }
}

const addEmployee = async ({id,name,age,position,email,phone,address,department,salary,skills}) => {
    try {
        const employeeData = await Axios.post("/employee/addemployeeinfo", {id,name,age,position,email,phone,address,department,salary,skills});

        if(employeeData) {
            return {isError: false, message: "Employee data inserted Successfully!"}
        } else {
            return {isError: true, message: "Please try again!!"}
        }
    } catch (error) {
        return {isError: true, message: error.message}
    }
}

const deleteEmployee = async(id) => {
    try {
        const deletedEmployee = await Axios.delete(`employee/deleteemployeeinfo/${id}`)
        if(deletedEmployee) {
            return {isError: false, message: "Employee data Deleted Successfully!"}
        } else {
            return {isError: true, message: "Please try again!!"}
        }
    } catch (error) {
        return {isError: true, message: error.message}
    }
}

const employeeService = {getAllEmployee, editEmployee, addEmployee, deleteEmployee}
export default employeeService