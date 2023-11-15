import Axios from "../axios/index.js";

const registerUser = async ({ firstName, lastName, email, password }) => {
    try {
        await Axios.post("/users/register", { firstName, lastName, email, password });
    } catch (error) {
        console.log(error);
    }
}
const userService = {registerUser}
export default userService;
