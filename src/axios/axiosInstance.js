import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const axiosInstance = axios.create()

axiosInstance.defaults.baseURL = BASE_URL
axiosInstance.defaults.headers = {
  'Content-Type': 'application/json'
}

export default axiosInstance
