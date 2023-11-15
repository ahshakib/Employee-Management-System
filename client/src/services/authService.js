import Axios from "../axios/index.js";
import cookies from 'js-cookie'

const _clearCredentials = () => delete Axios.defaults.headers.common['Authorization']
const authenticate = async ({ email, password }) => {
    try {
        const { data } = await Axios.post('/users/login', { email, password, type: "email" })
        const { user, accessToken, refreshToken } = data

        if (accessToken && refreshToken) {
            Axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
            cookies.set('accessToken', accessToken)
            cookies.set('refreshToken', refreshToken)
            return { message: 'Successful login', user };
        } else {
            _clearCredentials()
        }
    } catch (e) {
        console.log(e);
        const message = e?.response?.data?.message ?? 'Something went wrong. Please try again after some time.';
        return {
            isError: true,
            errorTitle: 'Error!!',
            errorMessage: message,
        }
    }
}

const isLogin = () => {
    return!!cookies.get('refreshToken')
}
const logOut = () => {
    _clearCredentials()
    cookies.remove('accessToken')
    cookies.remove('refreshToken')
}

const authService = {authenticate, isLogin, logOut}
export default authService