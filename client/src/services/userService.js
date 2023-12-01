import cookies from 'js-cookie';
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

const userProfile = () => {
    const user = cookies.get('user')
    console.log(user)
    return JSON.parse(user)
}

const userService = {registerUser, userProfile}
export default userService;
