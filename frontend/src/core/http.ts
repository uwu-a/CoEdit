import axios, {AxiosInstance, AxiosResponse, InternalAxiosRequestConfig} from 'axios'
import {hideLoading, showLoading} from '../util/loadingCover.ts'

const http: AxiosInstance = axios.create({
    baseURL: 'http://localhost:80',
    timeout: 10000
})

http.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        showLoading()
        return config
    },
    (error) => {
        hideLoading()
        return Promise.reject(error)
    }
)

http.interceptors.response.use(
    (response: AxiosResponse) => {
        hideLoading()
        return response.data
    },
    (error) => {
        hideLoading()
        return Promise.reject(error)
    }
)

export default http