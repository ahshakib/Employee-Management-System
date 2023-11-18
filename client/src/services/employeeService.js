import Axios from "../axios/index.js";

const getAllEmployee = async() => {
    try {
        const allEmployee = await Axios.get("/employee/getallemployee")
        return allEmployee
    } catch (error) {
        console.log(error)
    }
}

const employeeService = {getAllEmployee}
export default employeeService