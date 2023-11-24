import Axios from "../axios/index.js";

const registerUser = async ({ firstName, lastName, email, password }) => {
    try {
        const registered = await Axios.post("/users/register", { firstName, lastName, email, password });

        if(registered) {
            return {isError: false, message: "Registration Successfull!"}
        } else {
            return {isError: true, message: "Please try again!!"}
        }
    } catch (error) {
        return {isError: true, message: "Please try again!!"}
    }
}

const userService = {registerUser}
export default userService;
