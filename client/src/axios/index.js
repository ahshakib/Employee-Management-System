import axios from 'axios'

const Axios = axios.create(
    {
        baseURL: 'http://localhost:2000/api',
        headers: {}
    }
)
export default Axios;