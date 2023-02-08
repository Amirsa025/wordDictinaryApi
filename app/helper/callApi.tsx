import axios from "axios";
import ValidationError from "../exception/validation";

const callApi = () => {
    const axiosInstance = axios.create({
        baseURL : 'https://api.dictionaryapi.dev/api'
    })

    axiosInstance.interceptors.request.use(
        (config) => {
            return config;
        },
        err => { throw err }
    )
    axiosInstance.interceptors.response.use(
        res => {
            return res;
        },
        err => {
            const res = err?.response
            if(res) {
                if(res.status === 404) {
                    throw new ValidationError(res.data.errors)
                }
            }
            throw err;
        }
    )

    return axiosInstance;
}


export default callApi;
