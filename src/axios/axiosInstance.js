import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default axiosInstance
